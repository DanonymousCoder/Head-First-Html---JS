function save(item) {
    let playlistArray = getStoreArray("playlist");
    playlistArray.push(item);
    localStorage.setItem("playlist", JSON.stringify(playlistArray));
}
function loadPlaylist() {
    let playlistArray = getSavedSongs();
    let ul = document.getElementById("playlist");
    
}