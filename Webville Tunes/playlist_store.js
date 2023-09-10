;
}
function getStoreArray(key) {
 var playlistArray = localStorage.getItem(key);
 if (playlistArray == null || playlistArray == "”) {
 playlistArray = new Array();
 }
 else {
 playlistArray = JSON.parse(playlistArray);
 }
 return playlistArray