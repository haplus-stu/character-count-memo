'use strict';
function str() {
  return document.getElementById("inputarea").value;
} 

 function number() {
   let counting_number = str().length;
  if(counting_number >= 0){
    document.getElementById("counter").innerHTML = counting_number+"文字";
  }
}


function count(){
  number();
}