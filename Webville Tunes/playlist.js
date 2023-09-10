window.onload = init;

function init() {
    let button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
}
function handleButtonClick() {
    let textInput = document.getElementById("songTextInput");
    let songName = textInput.value;
   if (songName == "") {
    alert("Please enter a song name")
   }
   else {
    alert("Adding" + " " + songName);
   }
   let li = document.createElement("li")
}