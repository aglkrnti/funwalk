const songs = document.querySelectorAll(".song");
const playButton = document.getElementById("play-btn");
const pauseButton = document.getElementById("pause-btn");
const currentSongDisplay = document.getElementById("current-song");

let audio = new Audio();
let currentSong = "";

songs.forEach((song) => {
  song.addEventListener("click", () => {
    currentSong = song.getAttribute("data-song");
    currentSongDisplay.textContent = `Sedang memutar: ${song.textContent.trim()}`;
    audio.src = currentSong;
    audio.play();
  });
});

playButton.addEventListener("click", () => {
  if (currentSong) {
    audio.play();
    currentSongDisplay.textContent = `Sedang memutar: ${audio.src
      .split("/")
      .pop()}`;
  } else {
    alert("Pilih lagu terlebih dahulu!");
  }
});

pauseButton.addEventListener("click", () => {
  audio.pause();
});
