const songs = [
    { title: "Brodie A Demon", artist: "Big Relly, Kay Flock, Justo Gustoo", file: "/assets/songs/Brodie A Demon.mp3" },
    { title: "Bronx To Brockton", artist: "Southside Kizzy, Chitho, Kay Flock", file: "/assets/songs/Bronx To Brockton.mp3" },
    { title: "Came Along Way", artist: "Kyle Richh, TaTa, Jenn Carter", file: "/assets/songs/Came Along Way.mp3" },
    { title: "Chill Guy", artist: "Kyle Richh, TaTa, Jenn Carter", file: "/assets/songs/Chill Guy.mp3" },
    { title: "Creep Up", artist: "Sdot Go, Jay Hound, SK Rollaxk", file: "/assets/songs/Creep Up.mp3" },
    { title: "Drillmaxxing", artist: "Kyle Richh, Manny 4zz, GBG Sheik, Relly 4zz, S9ine", file: "/assets/songs/Drillmaxxing.mp3" },
    { title: "Flame Em PT2", artist: "Kay Flock, Jo Bandz, Set Da Trend", file: "/assets/songs/Flame Em PT2.mp3" },
    { title: "Free Thunder", artist: "Kyle Richh, Dee Billz, S9ine, Jay Gelato", file: "/assets/songs/Free Thunder.mp3" },
    { title: "GO2DAMOON", artist: "Kyle Richh, Jah Woo, Jay Hound, Jay5ive, Jenn Carter", file: "/assets/songs/GO2DAMOON.mp3" },
    { title: "Guap", artist: "Kyle Richh, Jah Woo", file: "/assets/songs/Guap.mp3" },
    { title: "HEATHER", artist: "Kyle Richh, GBG Sheik, Relly 4zz, S9ine, Manny 4zz", file: "/assets/songs/HEATHER.mp3" },
    { title: "Penthouse 2", artist: "Kyle Richh, Jenn Carter", file: "/assets/songs/Penthouse 2.mp3" },
    { title: "Same Shit", artist: "Kay Flock, Porter B", file: "/assets/songs/Same Shit.mp3" },
    { title: "Save Me", artist: "Kyle Richh, TaTa, Jenn Carter", file: "/assets/songs/Save Me.mp3" },
    { title: "TroopersK", artist: "Kyle Richh, Manny 4zz", file: "/assets/songs/TroopersK.mp3" },
    { title: "UNFADEABLE / BOA", artist: "Kyle Richh", file: "/assets/songs/UNFADEABLE & BOA.mp3" },
    { title: "Whats The Word", artist: "TaTa, Kenzo B", file: "/assets/songs/Whats The Word.mp3" },
    { title: "Whisper", artist: "Kay Flock, Set Da Trend", file: "/assets/songs/Whisper.mp3" },
    { title: "WHOLE LOTTA 4ZZ", artist: "Kyle Richh", file: "/assets/songs/WHOLE LOTTA 4ZZ.mp3" }
];

const audio = new Audio();
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const playPauseBtn = document.getElementById('play-pause-btn');
const progressBar = document.getElementById('progress-bar');
const timeDisplay = document.getElementById('time-display');

let currentIndex = 0;
let isPlaying = false;

function loadSong(index) {
    const song = songs[index];
    songTitle.innerText = song.title;
    artistName.innerText = song.artist;
    audio.src = song.file;
    audio.load();
}

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.innerText = 'Play';
    } else {
        audio.play();
        playPauseBtn.innerText = 'Pause';
    }
    isPlaying = !isPlaying;
}

function updateProgress() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    progressBar.value = (currentTime / duration) * 100;

    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    const durationMinutes = Math.floor(duration / 60);
    const durationSeconds = Math.floor(duration % 60);

    timeDisplay.innerText = `${currentMinutes}:${currentSeconds.toString().padStart(2, '0')} / ${durationMinutes}:${durationSeconds.toString().padStart(2, '0')}`;
}

function setProgress(e) {
    const duration = audio.duration;
    const newTime = (e.target.value / 100) * duration;
    audio.currentTime = newTime;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong(currentIndex);
    if (isPlaying) audio.play();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(currentIndex);
    if (isPlaying) audio.play();
});

playPauseBtn.addEventListener('click', togglePlayPause);
audio.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('input', setProgress);

loadSong(currentIndex);

document.getElementById('main-text').addEventListener('click', function() {
    document.querySelector('.centered').classList.toggle('active');
    document.querySelector('.links-container').classList.toggle('active');
});