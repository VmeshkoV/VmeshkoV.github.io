const image = document.getElementById('cover');
const title = document.getElementById('music-title');
const artist = document.getElementById('music-artist');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.getElementById('progress');
const playerProgress = document.getElementById('player-progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playBtn = document.getElementById('play');
const background = document.getElementById('bg-img');
let musicIndex = 0;
let isPlaying = false;
const music = new Audio();

const songs = [
  {
    path: 'assets/1.mp3',
    displayName: "The Charmer's Call",
    cover: 'assets/1.jpg',
    artist: 'Hanu Dixit',
  },
  {
    path: 'assets/2.mp3',
    displayName: 'You Will Never See Me Coming',
    cover: 'assets/2.jpg',
    artist: 'NEFFEX',
  },
  {
    path: 'assets/3.mp3',
    displayName: 'Intellect',
    cover: 'assets/3.jpg',
    artist: 'Yung Logos',
  }
];

const togglePlay = () => isPlaying ? pauseMusic() : playMusic();

const playMusic = () => {
  isPlaying = true;

  // Change play button icon
  playBtn.classList.replace('fa-play', 'fa-pause');

  // Set button hover title
  playBtn.setAttribute('title', 'Pause');

  music.play();
};

const pauseMusic = () => {
  isPlaying = false;

  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');

  music.pause();
};

const loadMusic = (song) => {
  music.src = song.path;
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  image.src = song.cover;
  background.src = song.cover;
};

const changeMusic = (direction) => {
  musicIndex = (musicIndex + direction + songs.length) % songs.length;
  loadMusic(songs[musicIndex]);
  playMusic();
};

const updateProgressBar = () => {
  const { duration, currentTime } = music;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
  durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
  currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
};

const setProgressBar = (e) => {
  const width = playerProgress.clientWidth;
  const clickX = e.offsetX;
  music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);