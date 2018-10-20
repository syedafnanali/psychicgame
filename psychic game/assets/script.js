var wins=["r","t","i","b","l","p","o","q","a"];

var random=Math.floor(Math.random()*9);

var cc=wins[random];

var win=document.getElementById("win");
var loss=document.getElementById("loss");
var guessed = document.getElementById("agl");
var lft = document.getElementById("gl");
var w=0,l=0;
var cont = 9;

function reset(){
    cont=9;
    lft.textContent = cont;
    guessed.textContent = "";
}
document.onkeyup=function(event){
    var letter = event.key;
    guessed.textContent +=letter+ ", ";
    lft.textContent = --cont;
    if(letter == cc){
        w++;
        win.textContent = w;
        reset();
    }else if(cont == 0){
        console.log(cont);
        l++;
        loss.textContent =l;
        reset();
    }
}