document.addEventListener('DOMContentLoaded', (ev) => {


let selected;

let basicTimeline = anime.timeline();

basicTimeline
  .add({
    targets: '#flappybird',
    translateY: [0, 500],
    translateX: [0, 100],
    loop: false,
    duration: 2000,
    rotate: '1turn',
    easing: 'easeInOutQuad',
  })
  .add({
    targets: '#flappybird2',
    translateX: [-5, 400],
    translateY: 40,
    opacity: [0, 100],
    scale: 1.5,
    loop: false,
    duration: 3000,
    easing: 'easeInOutQuad',
  });
  

let song1 = document.getElementsByClassName('song1')[0];
song1.innerText = 'Wrecking Ball';
song1.addEventListener('click', (ev) => {
    selected = 'assets/test.mp3';
    anime ({
        targets: '.song1',
        translateX: 36.9,
        translateY: 20,
        scale: 2.5,
        opacity: 1,
        rotate: '2turn',
    })
    anime ({
        targets: '.chooseSong',
        opacity: 0,
    })
})

let song2 = document.getElementsByClassName('song2')[0];
song2.innerText = 'She Wolf';
song2.addEventListener('click', (ev) => {
    selected = 'assets/David Guetta - She Wolf ft. Sia.mp3';  
    anime ({
        targets: '.song2',
        translateX: 30,
        translateY: 20,
        scale: 2.5,
        rotate: '2turn',
    })
    anime ({
        targets: '.chooseSong',
        opacity: 0,
    })  
})

let song3 = document.getElementsByClassName('song3')[0];
song3.innerText = 'The Monster';
song3.addEventListener('click', (ev) => {
    selected = 'assets/12 The Monster (feat. Rihanna).mp3';
    anime ({
        targets: '.song3',
        translateX: 24,
        translateY: 20,
        scale: 2.5,
        rotate: '2turn',
    })
    anime ({
        targets: '.chooseSong',
        opacity: 0,
    })  
})

let song4 = document.getElementsByClassName('song4')[0];
song4.innerText = 'Lean On';
song4.addEventListener('click', (ev) => {
    selected = 'assets/01 Lean On.mp3';
    anime ({
        targets: '.song4',
        translateX: 17,
        translateY: 20,
        scale: 2.5,
        rotate: '2turn',
    })
    anime ({
        targets: '.chooseSong',
        opacity: 0,
    })  
})

let song5 = document.getElementsByClassName('song5')[0];
song5.innerText = 'Young Blood';
song5.addEventListener('click', (ev) => {
    selected = 'assets/01 Young Blood.m4a';
    anime ({
        targets: '.song5',
        translateX: 10,
        translateY: 20,
        scale: 2.5,
        rotate: '2turn',
    })
    anime ({
        targets: '.chooseSong',
        opacity: 0,
    })  
})

let song6 = document.getElementsByClassName('song6')[0];
song6.innerText = 'Work From Home';
song6.addEventListener('click', (ev) => {
    selected = 'assets/Fifth Harmony - Work from Home ft. Ty Dolla $ign.mp3';
    anime ({
        targets: '.song6',
        translateX: 4,
        translateY: 20,
        scale: 2.5,
        rotate: '2turn',
    })
    anime ({
        targets: '.chooseSong',
        opacity: 0,
    })  
})

let song7 = document.getElementsByClassName('song7')[0];
song7.innerText = `Don't Let Me Down`;
song7.addEventListener('click', (ev) => {
    selected = `assets/The Chainsmokers - Don't Let Me Down (Audio) ft. Daya.mp3`;
    anime ({
        targets: '.song7',
        translateX: -4,
        translateY: 20,
        scale: 2.5,
        rotate: '2turn',
    })
    anime ({
        targets: '.chooseSong',
        opacity: 0,
    })  
})

let song8 = document.getElementsByClassName('song8')[0];
song8.innerText = 'Chandelier';
song8.addEventListener('click', (ev) => {
    selected = 'assets/Chandelier.mp3';
    anime ({
        targets: '.song8',
        translateX: -10,
        translateY: 20,
        scale: 2.5,
        rotate: '2turn',
    })
    anime ({
        targets: '.chooseSong',
        opacity: 0,
    })  
})

let song9 = document.getElementsByClassName('song9')[0];
song9.innerText = 'Head Full of Dreams';
song9.addEventListener('click', (ev) => {
    selected = 'assets/11 Up & Up.mp3';
    anime ({
        targets: '.song9',
        translateX: -15,
        translateY: 20,
        scale: 2.5,
        rotate: '2turn',
    })
    anime ({
        targets: '.chooseSong',
        opacity: 0,
    })  
})

let song10 = document.getElementsByClassName('song10')[0];
song10.innerText = '1989';
song10.addEventListener('click', (ev) => {
    selected = 'assets/02 Blank Space.mp3';
    anime ({
        targets: '.song10',
        translateX: -22,
        translateY: 20,
        scale: 2.5,
        rotate: '2turn',
    })
    anime ({
        targets: '.chooseSong',
        opacity: 0,
    })  
})

    let animateTitle = anime({
        targets: 'h1',
        translateY: '17rem',
        translateX: '5rem',
        opacity: 50,
        loop: 1,
        fontSize: 75,
        delay: 200,
        duration: 1000
    })

    let animateChooseSong = anime({
        targets: '.chooseSong',
        translateY: '19rem',
        translateX: '37rem',
        scale: [1, 3],
        opacity: [0, .8],
        delay: 500,
        duration: 1000
    })

    let animateSong1 = anime ({
        targets: '.song1',
        translateX: '15rem',
        translateY: '28rem',
        opacity: [0, .8],
        scale: [1, 1.6],
        borderRadius: ['0em', '5em'],
        delay: 500,
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
        delay: 700,
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
        delay: 900,
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
        delay: 1100,
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
        delay: 1300,
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
        delay: 1300,
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
        delay: 1100,
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
        delay: 700,
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
        delay: 500,
        direction: 'alternate',
        loop: false,
        duration: 1000
    })

    let animateInstructions = anime ({
        targets: '#instructions',
        translateY : '10rem',
        translateX : '-5rem',
        opacity: [0, .9],
        delay: 1100,
        duration: 1000,
    })

    let animatePlaySong = anime ({
        targets: '#playSong',
        translateY : '25rem',
        translateX : '5rem',
        opacity: [0, .9],
        delay: 1100,
        duration: 1000,
    })

    let animatePlayGame = anime ({
        targets: '#playGame',
        translateY : '30rem',
        translateX : '8rem',
        opacity: [0, .9],
        delay: 1100,
        duration: 1000,

    })

    let instructions = document.getElementById('instructions');
    instructions.addEventListener('click', (ev) => {
        instructions.innerText = '';
        let instructionList = document.createElement('ul');
        instructionList.innerText = 'INSTRUCTIONS:'
        instructions.appendChild(instructionList);

        let liOne = document.createElement('li');
        instructionList.appendChild(liOne);
        liOne.innerText = "Use the spacebar to fly."

        let liTwo = document.createElement('li');
        instructionList.appendChild(liTwo);
        liTwo.innerText = "Collect the pink bugs for your babies."

        let liThree = document.createElement('li');
        instructionList.appendChild(liThree);
        liThree.innerText = "Be aware of the poisonous yellow bugs - they will kill you."

        anime ({
            targets: '.chooseSong',
            opacity: 0,
        })
        anime ({
            targets: 'h1',
            opacity: 0,
        })
        anime ({
            targets: '.song',
            opacity: 0,
        })
        anime ({
            targets: '#instructions',
            scale: [1, 4],
            translateY : '5rem',
            translateX : '-10rem',
        })
        
    })

    let playSong = document.getElementById('playSong');
    playSong.addEventListener('click', (ev) => {
        window.open(`page3.html?song=${selected}`);
    })

    let playGame = document.getElementById('playGame');
    playGame.addEventListener('click', (ev) => {
        window.open(`page2.html?song=${selected}`);
    })

})

