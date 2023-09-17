window.onload = bark;
function bark(dogName, dogWeight) {
    let name = document.getElementById("dogName");
    let dogName = name.value;
    let weight = document.getElementById("dogWeight");
    let dogWeight = weight.value;
    if (dogWeight < 50) {
        return dogName + "Yip";
    }
    else {
        return dogName + "Woof";
    }
}