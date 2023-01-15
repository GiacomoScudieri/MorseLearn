let morseText =""; 
let short = ".";
let long = "-"; 
const morseAlphabet = {
    '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e',
    '..-.': 'f', '--.': 'g', '....': 'h', '..': 'i', '.---': 'j',
    '-.-': 'k', '.-..': 'l', '--': 'm', '-.': 'n', '': 'o',
    '.--.': 'p', '--.-': 'q', '.-.': 'r', '...': 's', '-': 't',
    '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x', '-.--': 'y',
    '--..': 'z', '.----': '1', '..---': '2', '...--': '3', 
    '....-': '4', '.....': '5', '-....': '6', '--...': '7',
    '---..': '8', '----.': '9', '-----': '0', '.-.-.-': '.',
    '--..--': ',', '..--..': '?', '-..-.': '/', '.--.-.': '@'
};
let timeLeft = 3;
let startTime = 3;
var textContent;
var textFile = "frasi.txt";
var randomLine;
var characterDisplayed;
var fs = require("fs");
textContent = fs.readFileSync(textFile,"utf8");
var lineOfText = textContent.split('\n');
randomLine = Math.floor(Math.random() * lineOfText.length);
characterDisplayed = lineOfText[randomLine].split("");
var timer =setInterval(function(){
    timeLeft -= 1;
    document.querySelector("#pressed").innerHTML = timeLeft;
    if(timeLeft<=0){
    }
    return timeLeft;
},
    1000);
//----------------------------------------------------vrbls-------------------------//
for(let i =0; i<characterDisplayed.length;i++)
{
    if(characterDisplayed[i]==" ")
    { 
        characterDisplayed[i] = null;}
}

function addShort()
{
    morseText += short;
    timeLeft = startTime;
}
function addLong()
{
    morseText += long;
    timeLeft = startTime;
}   
function resetMorseText()
{
    morseText = null;
}
function decode(word)
{
    console.log("decode function gets called");
    var newWord = morseAlphabet[word];    
    console.log(newWord);
    morseText = "";
    return newWord
}

function changeTextMorse()
{
    if(timeLeft>0){
        document.querySelector("#pressed").innerHTML = morseText;
        console.log(timeLeft); 

    }
    else{
       document.querySelector("#pressed").innerHTML = decode(morseText);
       console.log("time out: ");

    }
}

