var game = new Phaser.Game(800, 480, Phaser.AUTO, "");

var MainState = {
    preload: function() {
    },
    create: function() {
    },
    update: function() {
    },
    render: function() {
    }
}

game.state.add("main", MainState, true);
//if true the State will be started immediately after adding it.