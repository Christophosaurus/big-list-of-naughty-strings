const naughtyStrings = require('../blns.json');
const fs = require('fs');

naughtyStrings.naughtyStrings.forEach(function(string) {
    // console.log(string);

    fs.writeFile('<insert path to folder here>' + string + '.txt', string, function(err) {
        if(!err) {
            console.log(string + ' file has been written');
        } else {
        console.log('Failed');
        }
    });

});