let hasClicked = false;
const video = document.getElementById('vid');

const sources = [
    {
        video: 'assets/songs/andidontfeelbad.mp4',
        title: `Sha Gz - And I Don't Feel Bad`
    },
    {
        video: 'assets/songs/bent.mp4',
        title: 'Kyle Richh - Bent'
    },
    {
        video: 'assets/songs/isyaready.mp4',
        title: 'Kay Flock - Is Ya Ready'
    },
    {
        video: 'assets/songs/lastfridaynight.mp4',
        title: 'Trav Money “42” - Last Friday Night'
    },
    {
        video: 'assets/songs/misconceptions.mp4',
        title: 'Kyle Richh - Misconceptions / Juliet'
    },
    {
        video: 'assets/songs/penthouse.mp4',
        title: 'Kyle Richh - Penthouse'
    },
    {
        video: 'assets/songs/psa.mp4',
        title: 'Kay Flock - PSA'
    },
    {
        video: 'assets/songs/jennjennjenn.mp4',
        title: 'Jenn Carter - Jenn Jenn Jenn'
    },
    {
        video: 'assets/songs/eater.mp4',
        title: '917 Rackz - Eater'
    },
    {
        video: 'assets/songs/tooteres.mp4',
        title: 'Sdot Go - Tooteres'
    },
    {
        video: 'assets/songs/deadly.mp4',
        title: 'Nesty Gzz - Deadly'
    },
    {
        video: 'assets/songs/freeg.mp4',
        title: 'Sdot Go - Free G'
    },
    {
        video: 'assets/songs/trick.mp4',
        title: 'Kyle Richh - Trick'
    },
];

// Modify your randomizeVideo function to handle muting/unmuting on video change
function randomizeVideo() {
    const randomSource = getRandomSource();
    video.src = randomSource.video;
    // document.getElementById('song-title').textContent = `♪ ${randomSource.title}`;
    video.volume = 0.25;

    video.addEventListener('ended', onVideoEnded);
    video.play();

    console.log("Playing video " + randomSource.title)
}

function onVideoEnded() {
    // Remove the 'ended' event listener to prevent multiple calls
    const video = document.getElementById('vid');
    video.removeEventListener('ended', onVideoEnded);

    // Play a new random video
    randomizeVideo();
}

function shuffleArray(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function getRandomSource() {
    const shuffledSources = shuffleArray(sources);
    const randomIndex = Math.floor(Math.random() * shuffledSources.length);
    return shuffledSources[randomIndex];
}

document.getElementById("title").addEventListener('click', function () {
    if (!hasClicked) {
        randomizeVideo();
        document.getElementById("title").className = "rainbow-text";
        document.getElementById("socials").className = "social-row";
        hasClicked = true;
    }
})