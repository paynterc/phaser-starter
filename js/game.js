var upKey, leftKey, rightKey, downKey, attKey, spaceKey, activePointer, centerX, centerY, W, H, defaultVolume;


const fireInputIsActive = function() {
    return activePointer.isDown;
};

const upInputIsActive = function(){
    return upKey.isDown;
}

const downInputIsActive = function(){
    return downKey.isDown;
}

const leftInputIsActive = function(){
    return leftKey.isDown;
}

const rightInputIsActive = function(){
    return rightKey.isDown;
}



// To access game: this.sys.game
var config = {
    type: Phaser.AUTO,
    width: 960,
    height: 544,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    render: {
        pixelArt: true,
        roundPixels: false
    },
    parent: 'ph_game',
    backgroundColor: '#000000',
    scene: [BootScene,MenuScene,GameScene,SettingsScene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        }
    },
};

var game = new Phaser.Game(config);