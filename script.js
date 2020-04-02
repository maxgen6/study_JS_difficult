'use strict';

let  arr = [];

let searchNumber = function(){
        for (let i = 0; i < 7; i++){
        arr[i] = prompt('Enter the number: ');
        arr[i] = arr[i].toString();
              
          
        if(arr[i].length === 7 && (arr[i].startsWith('2') || arr[i].startsWith('4'))){
            
             console.log(arr[i]);
        }
        
       
        
         
    
    }
}
searchNumber();
