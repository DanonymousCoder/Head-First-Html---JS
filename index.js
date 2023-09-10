/*let count = 0;
for (i=0; i< 5; i++) {
    count = count + i;
}
alert ("count is " +  count);*/

/*var tops = 5;
while (tops > 0){
    for ( spins = 0; spins<3; spins++) {
        alert("Top is spinning!");
    }
    tops = tops - 1;
}

for ( let berries = 5; berries > 0; berries --) {
    alert("Eating a Berry!");
}

for ( scoops = 0 ; scoops< 10 ; scoops ++) {
    alert("There is still more icecream, come and have yours!");
}
alert("Oops, its finished!");
*/

/*let cashInWallet = prompt("How much do you have", " ");
if (cashInWallet > 5) {
    alert("I'll take the works: Cheeseburger, fries and a coke");
}
else {
    alert("I'll just have a glass of water!");
}*/
let word1 = "a";
let word2 = "nam";
let word3 = "nal p";
let word4 = "lan a c";
let word5 = "a man a p";

/*let phrase = " ";
for (i = 0 ; i < 4 ; i ++) {
    if (i == 0) {
        phrase = phrase + word5;
    }
    else if ( i == 1) {
        phrase = phrase+ word4;
    }
    else if (i == 2) {
        phrase = phrase +word1 +word3 ;
    } 
    else if (i == 3) {
        phrase = phrase + word1 + word2 +word1;
    }
}
alert(phrase); */


function init() {
    let planet = document.getElementById("greenplanet");
    planet.innerHTML = "Red Alert: hit by phaser fire!";
}
window.onload = init;

function addSongs() {
    let song1 = document.getElementById("song1");
    let song2 = document.getElementById("song2");
    let song3 = document.getElementById("song3");
    song1.innerHTML = "Blue Suede Strings, by Elvis Pagely";
    song2.innerHTML = "Great Objects on Fire, by Jerry JSON Lewis";
    song3.innerHTML = "I Code the Line, by Johnny JavaScript";
}
window.onload = addSongs;

function showTemp() {
    let tempByHour= [59.2, 60.1, 63, 65, 62];
    for ( i = 0; i < tempByHour.length; i++ ) {
        let theTemp = tempByHour[i];
        let id = "temp" + i;
        let li = document.getElementById(id);
       if (i==0) {
            li.innerHTML = "The temperature at noon was " + theTemp;
        }
        else {
            li.innerHTML = "The temperature at " + i + " was " + theTemp
        }
    }
}
window.onload = showTemp;


/* 
function showPhrase() {
    let word1= ["24/7", "multi-Tier", "30,000 foot", "B-to-B", "win-win"];
    let word2 =["empowered", "value-added", "oriented", "focused", "aligned"];
    let word3 = ["process", "solution", "tipping-point", "strategy", "vision"]

    let rand1 = Math.floor(Math.random() * word1.length);
    let rand2 = Math.floor(Math.random() * word2.length);
    let rand3 = Math.floor(Math.random() * word3.length);

    let phrase = word1[rand1] + " " + word2[rand2] + " " + word3[rand3];
    let phraseTag = document.getElementById("phrase");
    phraseTag.innerHTML = phrase;
}
window.onload = showPhrase;
*/