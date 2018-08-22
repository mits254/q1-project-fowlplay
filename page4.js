document.addEventListener('DOMContentLoaded', () => {
    let homePageBtn = document.getElementById('homePageBtn');
    homePageBtn.textContent = 'HOME';
    homePageBtn.addEventListener('click', (ev) => {
        window.open('page1.html')
    })

    let animateCongrats = anime({
        targets: 'h1',
        translateY: '5rem',
        translateX: '50rem',
        opacity: 50,
        loop: 1,
        fontSize: 75,
        delay: 100,
        duration: 1000
    })

    let animateScore = anime({
        targets: 'h2',
        translateY: '7rem',
        translateX: '22rem',
        opacity: 50,
        loop: 1,
        fontSize: 50,
        delay: 100,
        duration: 1000
    })

    let animateHomePage = anime ({
        targets: '#homePageBtn',
        translateY : '22rem',
        translateX : '-5rem',
        opacity: [0, .9],
        delay: 1100,
        duration: 1000,
    })

})