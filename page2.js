document.addEventListener('DOMContentLoaded', () => {
    let X = window.innerWidth;
    let Y = window.innerHeight;
    let windowX = Math.ceil(X / 1.5);
    let windowY = Math.ceil(Y / 1.5) - 30;
    let gm = document.getElementById('analyser_render');
    gm.width = X / 1.5;
    gm.height = Y / 3 - 20;
    let totalScore = 0;
    let screen_velocity = 100;
    let mainState = {
        preload: function () {
            // This function will be executed at the beginning     
            // That's where we load the images and sounds 
            game.load.image('bird', 'assets/new_bird1.png');
            game.load.image('goodbug', 'assets/good_bug.png');
            game.load.image('badbug', 'assets/badbug.png');
        },
        create: function () {
            // This function is called after the preload function     
            // Here we set up the game, display sprites, etc.  
            // Change the background color of the game to blue
            game.stage.backgroundColor = '#002D3C';
            // Set the physics system
            game.physics.startSystem(Phaser.Physics.ARCADE);
            // Display the bird at the position x=100 and y=245
            this.bird = game.add.sprite(10, windowY / 2, 'bird');
            this.bird.scale.setTo(0.1, 0.1);
            // Add physics to the bird
            // Needed for: movements, gravity, collisions, etc.
            game.physics.arcade.enable(this.bird);
            // Add gravity to the bird to make it fall
            this.bird.body.gravity.y = windowY / 2;
            // add the bad bugs group
            this.bBugs = game.add.group();
            this.timer = game.time.events.loop(1500, this.addRowOfBugs, this);
            // add food to the game
            this.food = game.add.group();
            this.timer = game.time.events.loop(1000, this.addfood, this);
            // add the score to the top left 
            this.score = 0;
            this.labelScore = game.add.text(20, 20, "0",
                { font: "30px Arial", fill: "#ffffff" });
            // Call the 'jump' function when the spacekey is hit
            let spaceKey = game.input.keyboard.addKey(
                Phaser.Keyboard.SPACEBAR);
            spaceKey.onDown.add(this.jump, this);
        },
        update: function () {
            // This function is called 60 times per second    
            // It contains the game's logic
            if (this.bird.y < 0 || this.bird.y > windowY)
                this.restartGame();
            game.physics.arcade.overlap(
                this.bird, this.food, this.eatFood, null, this);
            game.physics.arcade.overlap(
                this.bird, this.bBugs, this.restartGame, null, this);
        },
        // Make the bird jump 
        jump: function () {
            // Add a vertical velocity to the bird
            this.bird.body.velocity.y = -windowY / 2;
        },
        // add a bad bug
        addOneBug: function (x, y) {
            // Create a bad bug at the position x and y
            let badbug = game.add.sprite(x, y, 'badbug');
            badbug.scale.setTo(0.8, 0.8);
            // Add the bad bug to our previously created group
            this.bBugs.add(badbug);
            // Enable physics on the bad bug 
            game.physics.arcade.enable(badbug);
            // Add velocity to the bad bug to make it move left
            badbug.body.velocity.x = -200;
            // Automatically kill the bad bug when it's no longer visible 
            badbug.checkWorldBounds = true;
            badbug.outOfBoundsKill = true;
        },
        addRowOfBugs: function () {
            // Randomly pick the number between 0 and 7
            let partition_ht = Math.floor(windowY / 8);
            let randombug = Math.floor(Math.random() * 7);
            this.addOneBug(windowX, randombug * partition_ht + 10);
        },
        // add food to the game
        addOnefood: function (x, y) {
            // Create a bad bug at the position x and y
            let goodbug = game.add.sprite(x, y, 'goodbug');
            goodbug.scale.setTo(0.1, 0.1);
            // Add the bad bug to our previously created group
            this.food.add(goodbug);
            // Enable physics on the bad bug 
            game.physics.arcade.enable(goodbug);
            // Add velocity to the bad bug to make it move left
            goodbug.body.velocity.x = -2 * screen_velocity;
            // Automatically kill the bad bug when it's no longer visible 
            goodbug.checkWorldBounds = true;
            goodbug.outOfBoundsKill = true;
        },
        addfood: function () {
            // Randomly pick a number between 0 and 8
            // This will be the fud position
            let part_ht = Math.floor(windowY / 10);
            let goodbugY = Math.floor(Math.random() * 9);
            // With food at position fudY
            this.addOnefood(windowX, goodbugY * part_ht + 15);
        },
        eatFood: function (bird, goodbug) {
            this.score += 1;
            totalScore += 1;
            console.log(totalScore);
            this.labelScore.text = this.score;
            goodbug.destroy();
        },
        // Restart the game
        restartGame: function () {
            // Start the 'main' state, which restarts the game
            game.state.start('main');
        },
    };
    // Initialize Phaser, and create a 400px by 490px game
    let game = new Phaser.Game(windowX, windowY, Phaser.AUTO, 'game-area');
    // Add the 'mainState' and call it 'main'
    game.state.add('main', mainState);
    // Start the state to actually start the game
    game.state.start('main');
    // Create a new instance of an audio object and adjust some of its properties
    let audio = document.getElementById('audio_box');
    audio.src = window.location.search.split("=")[1];
    // audio.width = windowX;
    // Establish all variables that your Analyser will use
    let canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_y, bar_width, bar_height;
    // Initialize the MP3 player after the page loads all of its HTML into the window
    window.addEventListener("load", initMp3Player, false);
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
            window.open(`page4.html?score=${totalScore}`);
        };
        frameLooper();
    }
    // frameLooper() animates any style of graphics you wish to the audio frequency
    // Looping at the default frame rate that the browser provides(approx. 60 FPS)
    function frameLooper() {
        window.requestAnimationFrame(frameLooper);
        fbc_array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(fbc_array);
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        ctx.fillStyle = '#00CCFF'; // Color of the bars
        screen_velocity = fbc_array[0];
        bars = 50;
        for (let i = 0; i < bars; i++) {
            bar_x = i * 30;
            bar_width = 25;
            bar_height = -(fbc_array[i] / 1.25);
            bar_y = canvas.height;
            //fillRect(x, y, width, height) // Explanation of the parameters below
            ctx.fillRect(bar_x, bar_y, bar_width, bar_height);
        }
    }
})