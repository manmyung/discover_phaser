var loadState = {
    
    preload: function () {
        // Add a 'loading...' label on the screen
        var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', { font: '30px Arial', fill: '#ffffff' });
        loadingLabel.anchor.setTo(0.5, 0.5);
    
        // Display the progress bar
        var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');                  
        progressBar.anchor.setTo(0.5, 0.5); 
        game.load.setPreloadSprite(progressBar);
    
        // Load all our assets
        game.load.spritesheet('player', 'assets/player2.png', 20, 20);
        game.load.image('enemy', 'assets/enemy.png');
        game.load.image('coin', 'assets/coin.png');
        game.load.image('wallV', 'assets/wallVertical.png');
        game.load.image('wallH', 'assets/wallHorizontal.png');
        
        game.load.image('background', 'assets/background.png');
        
        game.load.audio('jump', ['assets/jump.ogg', 'assets/jump.mp3']);
        game.load.audio('coin', ['assets/coin.ogg', 'assets/coin.mp3']);
        game.load.audio('dead', ['assets/dead.ogg', 'assets/dead.mp3']);
        
        game.load.image('pixel', 'assets/pixel.png');
        
        game.load.spritesheet('mute', 'assets/muteButton.png', 28, 22);
    },
    
    create: function() {
        game.state.start('menu');
    }
};