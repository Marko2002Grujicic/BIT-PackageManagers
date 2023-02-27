const figlet = require('figlet');

const generateAsciArt = () =>{
    const response = figlet.textSync('Frontend Bootcamp!', {
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    })
    return response
}
module.exports = {
    generateAsciArt
}


