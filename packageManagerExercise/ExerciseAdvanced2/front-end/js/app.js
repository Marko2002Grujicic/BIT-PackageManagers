import {renderHomePage} from './ui.js'
import {Post} from './data.js';

const getHomePage = () => {
  return fetch('http://127.0.0.1:3000')
  .then(function(res){
    return res.json();
  })
  .then(function (rawObject){
    console.log(rawObject);
    const finalObj = rawObject.map(({id, title, intro}) => new Post(id, title, intro));
    renderHomePage(finalObj)
  })
}

getHomePage();

