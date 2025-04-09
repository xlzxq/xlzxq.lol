let hasClicked = false;

const sources = [
    { audio: 'assets/songs/i_already_know.mp3', title: 'I Already Know', author: 'M Row' },
    { audio: 'assets/songs/make_you_feel_special.mp3', title: 'Make You Feel Special', author: 'M Row' },
    { audio: 'assets/songs/say_no_more_extended.mp3', title: 'Say No More Extended', author: 'M Row' },
    { audio: 'assets/songs/disappear.mp3', title: 'Disappear', author: 'M Row' },
    { audio: 'assets/songs/damn.mp3', title: 'Damn', author: 'Kyle Richh & TaTa' },
    { audio: 'assets/songs/xo_xo_luv.mp3', title: 'XO XO LUV', author: 'Kyle Richh' },
    { audio: 'assets/songs/function.mp3', title: 'FUNCTION', author: 'MAYBACH MACHO & Shani Boni' }
];

function randomizeAudio() {
    const audio = document.getElementById('audio');
    const randomSource = sources[Math.floor(Math.random() * sources.length)];
    audio.src = randomSource.audio;
    audio.volume = 0.15;
    audio.onended = randomizeAudio;
    audio.play();
    showNotification(`Now playing "${randomSource.title}" by ${randomSource.author}`);
}

function showNotification(message) {
    const container = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;
    container.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

document.getElementById("title").addEventListener('click', () => {
    if (!hasClicked) {
        randomizeAudio();
        document.getElementById("title").className = "rainbow-text";
        document.getElementById("socials").className = "social-row";
        document.getElementById("background-overlay").classList.add("visible");
        hasClicked = true;
    }
});
