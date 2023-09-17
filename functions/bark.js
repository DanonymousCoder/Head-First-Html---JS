
function bark(dogName, dogWeight) {
    if (dogWeight < 50) {
        return dogName + " Yips";
    }
    else {
         return dogName + " Woofs";
    }
    
}
let sound = bark("fido", 51);
alert(sound)