'use strict';

let  week = ['monday' , 'tuesday' , 'wensday' , 'thursday' , 'friday' , 'saturday' , 'sunday'];
const Data = new Date();
const Year = Data.getFullYear();
const Month = Data.getMonth();
const Day = Data.getDate();  

for( let i = 0; i < week.length; i++){
    if(i < 5){
        console.log(week[i]);
    } else {
        console.log(week[i].italics()); 
    }
    
}

console.log('Сегедня: ' + Day + ' ' + (Month + 1) + ' ' + Year);