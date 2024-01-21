var playlist = [
    { title: "Song 1", url: "song1.mp3" },
    { title: "Song 2", url: "song2.mp3" },
    { title: "Song 3", url: "song3.mp3" }
  ];
  
  function createPlaylist() {
    var playlistElement = document.getElementById('playlist');
    
    playlist.forEach(function(song, index) {
      var listItem = document.createElement('li');
      var link = document.createElement('a');
      link.href = "#";
      link.innerText = song.title;
      link.addEventListener('click', function() {
        playSong(song.url);
      });
      listItem.appendChild(link);
      playlistElement.appendChild(listItem);
    });
  }
  
  function playSong(songUrl) {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = songUrl;
    audioPlayer.play();
  }
  
  // Create the playlist when the page loads
  window.addEventListener('load', createPlaylist);
  