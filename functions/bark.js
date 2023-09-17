window.onload = bark;
function bark(dogName, dogWeight) {
    let name = document.getElementById("dogName");
    let dogName = name.ariaValueMax;
    if (dogWeight < 50) {
        return dogName + "Yip";
    }
    else {
        return dogName + "Woof";
    }
}