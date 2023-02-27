const http = require('http');
const host = '127.0.0.1'
const port = 5500;
const {lorem} = require('./loremLogic')

let arr = [];
while(arr.length < 4){
  var randomnumber = Math.ceil(Math.random()*100)
  if(arr.indexOf(randomnumber) === -1){arr.push(randomnumber)}  
}

const requestHandler = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
        res.statusCode = 200;
        res.end(
          JSON.stringify([
            { id : `${arr[0]}` ,title: `${lorem.generateWords(3)}`, intro: `${lorem.generateSentences(2)}` },
            { id : `${arr[1]}`, title: `${lorem.generateWords(3)}`, intro: `${lorem.generateSentences(2)}` },
            { id : `${arr[2]}`, title: `${lorem.generateWords(3)}`, intro: `${lorem.generateSentences(2)}` },
            { id : `${arr[3]}`, title: `${lorem.generateWords(3)}`, intro: `${lorem.generateSentences(2)}` },
          ])
        );
        return;
    };

const server = http.createServer(requestHandler);

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
})