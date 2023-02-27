const wrapperSelector = document.querySelector("#wrapper");

class Post {
    constructor(id, title, intro){
        this.id = id;
        this.title = title;
        this.intro = intro;
    }
}

const getHomePage = () => {
  return fetch('http://127.0.0.1:5500')
  .then(function(res){
    return res.json();
  })
  .then(function (rawObject){
    return rawObject.map(({id, title, intro}) => new Post(id, title, intro));
  })
}

const renderHomePage = (posts) => {
    let html = `<nav><h1 class='blog'>Blog</h1></nav>`
    posts.forEach((posts) => {
        html += `
        <div class="posts">
            <h1>${posts.title}</h1>
            <div class='intro'>${posts.intro}</div>
        </div>
        `
    });
    wrapperSelector.innerHTML = html;
}
