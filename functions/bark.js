window.onload = bark;
function bark(dogName, dogWeight) {
    let name = document.getElementById("dogName");
    let dogName = name.value;
    let weight = document.getElementById("dogWeight");
    let dogWeight = weight.value;
    let p = document.createElement("p");
    let ul = document.getElementById("message");
    ul.appendChild(p)
    if (dogWeight < 50) {
        let p = dogName + "Yip";
    }
    else {
        let p = dogName + "Woof";
    }
}