
    function init() {
        var button = document.getElementById("addButton");
        button.onclick = handleButtonClick;
        loadPlaylist();
       } 
       function handleButtonClick() {
        var textInput = document.getElementById("songTextInput");
        var songName = textInput.value;
        var li = document.createElement("li");
        li.innerHTML = songName;
        var ul = document.getElementById("list");
        ul.appendChild(li);
        save(songName)
       }
function save(item) {
    let playlistArray = getStoreArray("playlist");
    playlistArray.push(item);
    localStorage.setItem("playlist", JSON.stringify(playlistArray));
}
function loadPlaylist() {
    let playlistArray = getSavedSongs();
    let ul = document.getElementById("playlist");
    if (playlistArray != null) {
        for ( let i = 0; i < playlistArray; i++) {
            let li = document.createElement("li");
            li.innerHTML = playlistArray[i];
            ul.appendChild(li);
        }
    }
}
function getSavedSongs() {
    return getStoreArray("playlist");
}
function getStoreArray(key) {
    let playlistArray = localStorage.getItem(key);
    if (playlistArray == null || playlistArray == " ") {
        playlistArray = new Array();
    }
    else {
        playlistArray = JSON.parse(playlistArray);
    }
    return playlistArray;
}
