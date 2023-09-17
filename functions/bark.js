
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

