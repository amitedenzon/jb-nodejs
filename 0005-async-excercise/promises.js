const howManyCandlesCallback = (dayNumber, callback) => {
    if ( dayNumber < 1 ) {
        return callback ('day cannot be smaller than 1');
    }

    if ( dayNumber > 8 ) {
        return callback ('No Isro Chag for Hannukah!');
    }

    return callback ( null, dayNumber + 1 );
}

const howManyCandles = async (dayNumber) => {
    return new Promise ((resolve, reject) => {
        howManyCandlesCallback(dayNumber, (err, result) => {
            if ( err ) {
                return reject(err);
            }
            return resolve(result);
        })
    });
}

howManyCandles(9).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})