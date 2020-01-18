'use strict';

var results=["大吉","小吉","吉"];
    
//占い
function getFortuneResult(){
var result=Math.floor(Math.random()*results.length);
console.log(result);
var resultText=results[result];

var btn_result=document.getElementById('button');
    
}

//抱負のコーナー
var maxChars=100;
var textBox=document.getElementById("inputbox");
textBox.addEventListener('keydown',note);


function note(){
    var note=document.getElementById("note");
    var text="あと"+(maxChars-textBox.value.length)+"文字書けるよ";
    //textの中身に設定している
    note.textContent=text;
}

function cheer(){
alert("FIGHT!!");
var cheerMessage=document.createElement("p");
var message="がんばれ！";
var outputMessage=document.createTextNode(message);
document.body.appendChild(cheerMessage).appendChild(outputMessage);

}
   
