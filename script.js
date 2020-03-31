'use strict';

let line = prompt('Enter the line: ');
const goOverLine = function(line){
    if(typeof line === 'string'){
        line = line.trim();
        if (line.length() >= 30){
            line = line.substr(0, 30) + '...';
        }
    } else{
        console.warn('Error');
    }
    
    console.log(line);
}
// console.log(goOverLine(line));





