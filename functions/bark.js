window.onload = init;
function init() {
    let button = document.getElementById("sound")
    button.onclick = bark;
}
function bark(dogName, dogWeight) {
    if (dogWeight < 50) {
        return dogName + "Yips";
    }
    else {
         return dogName + "Woofs";
    }
    
}