const { createServer } = require('http');

const HOST = 'localhost';
const PORT = '8080';

const requestListener = function (req, res) {
    res.setHeader('Content-Type', 'text/csv');
    res.writeHead(200);
    res.end('id,name,age\n12345678,shahar,47');
};

const server = createServer(requestListener);

server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
