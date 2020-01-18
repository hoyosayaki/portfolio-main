(function (){
'use strict';

var passedTime=0;
var intervalId=null;
var time=document.getElementById("time");



function start(){
  console.log(intervalId);
    if(intervalId!=null){
      return;  
    }
    intervalId=setInterval(function(){
    console.log(intervalId);
    passedTime++;
    render();
},10);
}

function stop(){
    if(intervalId!=null){
        clearInterval(intervalId);
      }
      intervalId=null;

}

function reset(){
    stop();
    passedTime=0;
    render();

}

function render(){


var minutes=Math.floor(passedTime/6000);
var seconds=Math.floor(passedTime/100)%60;
var miliseconds=passedTime%1000;

time.textContent=zeroFill(minutes)+':'+zeroFill(seconds)+':'+zeroFill(miliseconds);    
}

function zeroFill(num){
    return ('0'+num).slice(-2);
 }

render();
document.getElementById('start').addEventListener('click',start);
document.getElementById('stop').addEventListener('click',stop);
document.getElementById('reset').addEventListener('click',reset);


}()
);

