window.onload = getMyLocation;

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation);
    }
    else {
        alert("Oops! no geolocation support");
    }
}
function displayLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let p = document.getElementById("location");
    p.innerHTML = "You're at Latitude: " + latitude + " , Longitude: " + longitude;
}