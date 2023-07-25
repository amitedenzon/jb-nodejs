process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";

const axios = require('axios');
const cheerio = require('cheerio');

const mysql = require('mysql2');
const util = require('util');
const config = require('config');
const mongoose = require('mongoose');

const UserSymbol = require('./models/mysql/user-symbol');
const SymbolValue = require('./models/mongo/symbol-value');

const { io } = require('socket.io-client');
const socket = io(`http://${config.get('worker.io.host')}:${config.get('worker.io.port')}`);
// const socket = io(`http://localhost:3000`);

// MySQL initialization
const connection = mysql.createConnection(config.get('mysql'));
connection.connect = util.promisify(connection.connect);
connection.query = util.promisify(connection.query);

const scrape = async({symbol}) => {
    const result = await axios(`https://www.google.com/finance/quote/${symbol}-USD`);
    const $ = cheerio.load(result.data);
    const value = $('.YMlKec.fxKbKc').text().replace(',','');
    console.log(`Scraped ${value} for ${symbol}`);
    const symbolValue = new SymbolValue({
        symbol,
        value,
        when: new Date(),
    });
    const ret = await symbolValue.save();
    socket.emit('update from worker', {
        symbol: symbolValue.symbol,
        value: symbolValue.value,
    });
    return value;
}

const cycle = async () => {
    try{

        const userSymbol = new UserSymbol(connection);
        const symbols = await userSymbol.getDistinct();
        const promises = symbols.map((symbol => scrape(symbol)));
        const results = await Promise.allSettled(promises);

    } catch (err) {
        console.log(err);
    } finally {
        setTimeout(cycle, config.get('worker.interval'));
    }

}

(async () => {

    // Mongo initialization
    await mongoose.connect(`mongodb://${config.get('mongo.host')}:${config.get('mongo.port')}/${config.get('mongo.database')}`);

    // after Mysql and mongo are connected, we can start cycling
    cycle();

})();