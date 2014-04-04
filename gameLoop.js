var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO,  "", null, false, false, null);

var MainState = {
    preload: function() {
    },
    loadUpdate: function() {
    },
    loadRender: function() {
    },
    create: function() {
    },
    update: function() {
    },
    render: function() {
    },
    paused: function() {
    },
    shutdown: function() {
    }
}

game.state.add("main", MainState, true);
//game.state.add("preload", PreloadState, false);
//game.state.add("game", GameState, false);