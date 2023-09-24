
function bark(dogName, dogWeight) {
    if (dogWeight < 50) {
        return dogName + " Yips";
    }
    else {
         return dogName + " Woofs";
    }
    
}
let sound = bark("fido", 51);
alert(sound);

function dogAge(age) {
    return age*7;
}
let totalDogAge = dogAge(4);
alert(totalDogAge);

function rectangleArea(width, height) {
    let area = width * height;
    return area ;
}
let recArea = rectangleArea(3, 4);
alert(recArea);

function addUp(numArray) {
    total = 0;
    for (let i =0; i < numArray.length; i++) {
        total += numArray[i];
    }
    return total;
}
let totalAddUp = addUp([1, 5 , 3 , 9]);
alert(totalAddUp);

function getAvatar(points) {
    let avatar;
    if (points < 100) {
        avatar = "Mouse";
    }
    else if(points < 100 && points < 1000) {
        avatar = "cat";
    }
    else {
        avatar="ape"
    }
    return avatar;
}
let myAvatar = getAvatar(335);
alert(myAvatar);

let fido = {
    name: "Fido",
    weight: 40,
    breed: "mixed",
    loves: ["walks", " fetching balls"]
};
fido.loves.push(" chewing bones");
fido.weight = 50;
alert(fido.weight);
let prop;
for (prop in fido) {
    alert("Fido has a " + prop + " property");
    if (prop == "name") {
        alert("This is " + fido[prop])
    }
}

let likes = fido.loves;
let likeString = "Fido likes";
for (i = 0; i< likes.length; i++) {
    likeString += " " + likes[i];
}
alert(likeString);

function barks(dog) {
    if (dog.weight > 25) {
        alert("WOOF");
    }
    else {
        alert("YIP");
    }
}
barks(fido);
fido.age = 20;

delete fido.age;
alert(fido.age);

fido.weight = 48;
loseWeight(fido);
function loseWeight(dog) {
    dog.weight = dog.weight - 10;
}
alert(fido.name + " now weighs " + fido.weight + " " + "pounds");


let movie1 = {
    title : "Plan 9 from Outer Space",
    genre : "Cult classic",
    rating : 2,
    showTimes : [ "3:00pm", "7:00pm", "11:00pm"]
}
let movie2 = {
    title : "Forbidden Planet",
    genre : "Classic sci-fi",
    rating : 5,
    showTimes : [ "5:00pm", "9:00pm"],
    getNextShowing : function(movie) {
        let now = new Date().getTime();
    
        for (let i = 0; i< this.showTimes.length; i++) {
            let showTime = getTimeFromString(movie.showTimes[i]);
            if ((showTime - now) > 0) {
                return "Next showing of " + movie.title + " is " + movie.showTimes[i];
            }
        }
        return null;
    }
}


function getTimeFromString(timeString) {
    let theTime = new Date();
    let time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
    theTime.setHours( parseInt(time[1]) + (time[3] ? 12 : 0) );
    theTime.setMinutes( parseInt(time[2]) || 0 );
    return theTime.getTime();
   }
   var nextShowing = getNextShowing(movie1);
   alert(nextShowing);
   nextShowing = getNextShowing(movie2);
   alert(nextShowing);
let time = getNextShowing(movie1);
alert(time);