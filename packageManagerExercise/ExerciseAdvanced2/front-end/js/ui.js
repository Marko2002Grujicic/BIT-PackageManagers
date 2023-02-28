const wrapperSelector = document.querySelector("#wrapper");

export const renderHomePage = (posts) => {
    let html = `<nav><h1 class='blog'>Blog</h1></nav>
        <div id='main-content'>`
    posts.forEach((posts) => {
        html += `
        <div class="posts">
            <h1>${posts.title}</h1>
            <div class='intro'>${posts.intro}</div>
        </div>
        `
    });
    html+= `</div>`
    wrapperSelector.innerHTML = html;
  }
