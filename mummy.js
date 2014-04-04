mummy = game.add.sprite(x, y, 'mummy');
mummy.name = 'mummy';
mummy.animations.add('walk');

game.physics.arcade.enable(mummy);
mummy.scale.setTo(1,1);
mummy.anchor.setTo(.5,.5);
mummy.body.bounce.y = 0.05;
mummy.body.setSize(mummy.width*0.5,mummy.height,0,0);
mummy.body.collideWorldBounds = true;
mummy.body.maxVelocity.set(30, 10000);
