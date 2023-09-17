window.onload = bark;
function bark(dogName, dogWeight) {
    let name = document.getElementById("dogName");
    if (dogWeight < 50) {
        return dogName + "Yip";
    }
    else {
        return dogName + "Woof";
    }
}