
const http = require('http');
const host = 'localhost'
const port = 8000;
const {generateAsciArt} = require('./figletLogic')


const requestHandler = (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
   const text = generateAsciArt();
   res.end(text)
};

const server = http.createServer(requestHandler);

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
})