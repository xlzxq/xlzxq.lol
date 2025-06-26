let hasClicked = false;

document.getElementById("title").addEventListener('click', () => {
    if (!hasClicked) {
        const audio = document.getElementById('audio');
        audio.src = 'assets/songs/background.mp3';
        audio.volume = 0.20;
        audio.play();
        document.getElementById("title").classList.add("fade-out");
        hasClicked = true;
    }
});
