document.addEventListener('DOMContentLoaded', () => {
    let can = document.getElementsByTagName('canvas');

    can[0].width = window.innerWidth;
    can[0].height = window.innerHeight - 40;
    function make_base() {
        base_image = new Image();
        base_image.src = 'assets/new_bird1.png';
        base_image.onload = function () {
            ctx2.drawImage(base_image, 0, 0, 50, 50);
        }
    }
    canvas2 = document.getElementById('bird_layer');
    ctx2 = canvas2.getContext('2d');
    make_base();

   let position = 0;
   let forward = true;

   // set interval, flies for specified time, over and over
   const referenceNumber = setInterval(() => {
       // thing to do every interval
       if (position < can[0].width -20 && (forward || position < 0)) {
           move(5);
       } else {
           move(-5);
       }
   }, 50)

   function move(incr) {
       position += incr;
       canvas2.style.left = `${position}px`;
       canvas2.style.transform = incr > 0 ? 'rotateY(0deg)' : 'rotateY(180deg)';
       forward = incr > 0;
   }

    // Create a new instance of an audio object and adjust some of its properties
    let audio = document.getElementById('audio_box');
    audio.src = window.location.search.split('=')[1];
    // Establish all variables that your Analyser will use
    var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_y, bar_width, bar_height;
    // Initialize the MP3 player after the page loads all of its HTML into the window
    window.addEventListener('load', initMp3Player, false);
    function initMp3Player() {

        context = new AudioContext(); // AudioContext object instance
        analyser = context.createAnalyser(); // AnalyserNode method
        canvas = document.getElementById('analyser_render');
        ctx = canvas.getContext('2d');
        // Re-route audio playback into the processing graph of the AudioContext
        source = context.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(context.destination);
        audio.onended = function () {
            window.open('page1.html');
        };
        frameLooper();
    }
    // frameLooper() animates any style of graphics you wish to the audio frequency
    // Looping at the default frame rate that the browser provides(approx. 60 FPS)
    function frameLooper() {
        window.requestAnimationFrame(frameLooper);
        fbc_array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(fbc_array);
        if(fbc_array[0]%4 === 0)    
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        ctx.fillStyle = '#00CCFF'; // Color of the bars
        //creating the bird
        bars = 100;
        for (let i = 0; i < bars; i++) {
            bar_x = i * 20;
            bar_width = 19;
            if (fbc_array[i] % 2 === 0) {
                bar_height = -(fbc_array[i]);
                bar_y = canvas.height;
            }
            else if (i > 2) {
                bar_height = (fbc_array[i - 2]);
                bar_y = 0;
            }
            //  fillRect( x, y, width, height ) // Explanation of the parameters below
            ctx.fillRect(bar_x, bar_y, bar_width, bar_height);
        }
    }
    make_base();

})