window.onload = bark;
function bark(dogName, dogWeight) {
    let name = document.getElementById("dogName");
    let dogName = name.value;
    let weight = document.getElementById("dogWeight");
    let dogWeight = weight.value;
    let p = document.createElement("p");
    let ul = document.getElementById("message");
    
    if (dogWeight < 50) {
        let p.innerHTML = dogName + "Yip";
    }
    else {
        let p.innerHTML = dogName + "Woof";
    }
    ul.appendChild(p)
}