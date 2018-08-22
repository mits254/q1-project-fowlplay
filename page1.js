document.addEventListener('DOMContentLoaded', (ev) => {
  
let song1 = document.getElementsByClassName('song1')[0];
song1.innerText = 'Wrecking Ball';
song1.addEventListener('click', (ev) => {
    audio.src = 'assets/test.mp3';
})

let song2 = document.getElementsByClassName('song2')[0];
song2.innerText = 'She Wolf';
song2.addEventListener('click', (ev) => {
    audio.src = 'assets/test.mp3';
})

let song3 = document.getElementsByClassName('song3')[0];
song3.innerText = 'The Monster';
song3.addEventListener('click', (ev) => {
    audio.src = 'assets/test.mp3';
})

let song4 = document.getElementsByClassName('song4')[0];
song4.innerText = 'Lean On';
song4.addEventListener('click', (ev) => {
    audio.src = 'assets/test.mp3';
})

let song5 = document.getElementsByClassName('song5')[0];
song5.innerText = 'Young Blood';
song5.addEventListener('click', (ev) => {
    audio.src = 'assets/test.mp3';
})

let song6 = document.getElementsByClassName('song6')[0];
song6.innerText = 'Work From Home';
song6.addEventListener('click', (ev) => {
    audio.src = 'assets/test.mp3';
})

let song7 = document.getElementsByClassName('song7')[0];
song7.innerText = `Don't Let Me Down`;
song7.addEventListener('click', (ev) => {
    audio.src = 'assets/test.mp3';
})

let song8 = document.getElementsByClassName('song8')[0];
song8.innerText = 'Chandelier';
song8.addEventListener('click', (ev) => {
    audio.src = 'assets/test.mp3';
})

let song9 = document.getElementsByClassName('song9')[0];
song9.innerText = 'Head Full of Dreams';
song9.addEventListener('click', (ev) => {
    audio.src = 'assets/test.mp3';
})

let song10 = document.getElementsByClassName('song10')[0];
song10.innerText = '1989';
song10.addEventListener('click', (ev) => {
    audio.src = 'assets/test.mp3';
})

    let animateTitle = anime({
        targets: 'h1',
        translateY: '17rem',
        translateX: '5rem',
        opacity: 50,
        loop: 1,
        fontSize: 75,
        delay: 100,
        duration: 1000
    })

    let animateSong1 = anime ({
        targets: '.song1',
        translateX: '15rem',
        translateY: '28rem',
        opacity: [0, .8],
        scale: [1, 1.6],
        borderRadius: ['0em', '5em'],
        delay: 200,
        direction: 'alternate',
        loop: false,
        duration: 1000
    })

    let animateSong2 = anime ({
        targets: '.song2',
        translateX: '20rem',
        translateY: '34rem',
        opacity: [0, .8],
        scale: [1, 1.6],
        borderRadius: ['0em', '5em'],
        delay: 300,
        direction: 'alternate',
        loop: false,
        duration: 1000
    })

    let animateSong3 = anime ({
        targets: '.song3',
        translateX: '25rem',
        translateY: '36rem',
        opacity: [0, .8],
        scale: [1, 1.6],
        borderRadius: ['0em', '5em'],
        delay: 400,
        direction: 'alternate',
        loop: false,
        duration: 1000
    })

    let animateSong4 = anime ({
        targets: '.song4',
        translateX: '30rem',
        translateY: '33rem',
        opacity: [0, .8],
        scale: [1, 1.6],
        borderRadius: ['0em', '5em'],
        delay: 500,
        direction: 'alternate',
        loop: false,
        duration: 1000
    })

    let animateSong5 = anime ({
        targets: '.song5',
        translateX: '33rem',
        translateY: '23rem',
        opacity: [0, .8],
        scale: [1, 1.6],
        borderRadius: ['0em', '5em'],
        delay: 600,
        direction: 'alternate',
        loop: false,
        duration: 1000
    })

    let animateSong6 = anime ({
        targets: '.song6',
        translateX: '25rem',
        translateY: '12rem',
        opacity: [0, .8],
        scale: [1, 1.6],
        borderRadius: ['0em', '5em'],
        delay: 700,
        direction: 'alternate',
        loop: false,
        duration: 1000
    })

    let animateSong7 = anime ({
        targets: '.song7',
        translateX: '9rem',
        translateY: '5rem',
        opacity: [0, .8],
        scale: [1, 1.6],
        borderRadius: ['0em', '5em'],
        delay: 800,
        direction: 'alternate',
        loop: false,
        duration: 1000
    })

    let animateSong8 = anime ({
        targets: '.song8',
        translateX: '-10rem',
        translateY: '3rem',
        opacity: [0, .8],
        scale: [1, 1.6],
        borderRadius: ['0em', '5em'],
        delay: 900,
        direction: 'alternate',
        loop: false,
        duration: 1000
    })

    let animateSong9 = anime ({
        targets: '.song9',
        translateX: '-28rem',
        translateY: '5rem',
        opacity: [0, .8],
        scale: [1, 1.6],
        borderRadius: ['0em', '5em'],
        delay: 1000,
        direction: 'alternate',
        loop: false,
        duration: 1000
    })

    let animateSong10 = anime ({
        targets: '.song10',
        translateX: '-45rem',
        translateY: '12rem',
        opacity: [0, .8],
        scale: [1, 1.6],
        borderRadius: ['0em', '5em'],
        delay: 1100,
        direction: 'alternate',
        loop: false,
        duration: 1000
    })

    let animatePlaySong = anime ({
        targets: '#playSong',
        translateY : '22rem',
        translateX : '-5rem',
        opacity: [0, .9],
        delay: 1100,
        duration: 1000,
    })

    let animatePlayGame = anime ({
        targets: '#playGame',
        translateY : '35rem',
        translateX : '-4rem',
        opacity: [0, .9],
        delay: 1100,
        duration: 1000,

    })

    let playSong = document.getElementById('playSong');
    playSong.addEventListener('click', (ev) => {
        window.open('page3.html');
    })

    let playGame = document.getElementById('playGame');
    playGame.addEventListener('click', (ev) => {
        window.open('page2.html')
    })

})

