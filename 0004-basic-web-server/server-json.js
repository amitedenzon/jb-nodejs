const { createServer } = require('http');

const HOST = 'localhost';
const PORT = '8080';

const requestListener = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    const data = { schoolName: 'John Bryce' };
    res.writeHead(200);
    res.end(JSON.stringify(data));
};

const server = createServer(requestListener);

server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
