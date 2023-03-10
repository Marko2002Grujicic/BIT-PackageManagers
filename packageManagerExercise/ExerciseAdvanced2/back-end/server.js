const http = require('http');
const host = '127.0.0.1'
const port = 3000;
const {lorem} = require('./loremLogic')

let arr = [];
while(arr.length < 4){
  let randomnumber = Math.ceil(Math.random()*100)
  if(arr.indexOf(randomnumber) === -1){arr.push(randomnumber)}  
}

const requestHandler = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Request-Method", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    res.setHeader("Access-Control-Allow-Headers", "*");
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