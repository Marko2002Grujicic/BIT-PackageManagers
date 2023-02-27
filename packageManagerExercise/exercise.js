const figlet = require('figlet');

figlet.text('HELLO WORLD', {
    font: 'lean',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 400,
    whitespaceBreak: true
}, function(err, data) {
    console.log(data);
});

figlet.text('HELLO WORLD', {
            font: 'Larry 3D',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 400,
            whitespaceBreak: true
        }, function(err, data) {
            console.log(data);
        });
        

