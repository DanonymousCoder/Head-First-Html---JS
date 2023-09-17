window.onload = init;
loadPlaylist();
function init() {
    let button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
}
function handleButtonClick() {
    let textInput = document.getElementById("songTextInput");
    let songName = textInput.value;
    let li = document.createElement("li");
   li.innerHTML = songName;
   let ul = document.getElementById("playlist");
   ul.appendChild(li);
   save(songName);
}