let hasClicked = false;

document.getElementById("title").addEventListener('click', () => {
    if (!hasClicked) {
        const audio = document.getElementById('audio');
        audio.src = 'assets/songs/background.mp3';
        audio.volume = 0.15;
        audio.play();
        document.getElementById("title").className = "rainbow-text";
        document.getElementById("socials").className = "social-row";
        document.getElementById("shader-canvas").classList.add("visible");
        hasClicked = true;
    }
});
