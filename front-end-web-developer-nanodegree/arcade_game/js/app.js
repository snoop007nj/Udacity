//ennemies
var Enemy = function(x, y) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;

    //random speed
    this.speed = Math.floor(10 + Math.random() * 100);
};

Enemy.prototype.update = function(dt) {
    if ( this.x < 500) {
        this.x += this.speed * dt;
    } else {
        this.x = 0;
    }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//player
var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {
    var self = this;
    allEnemies.forEach(function(enemy) {
        if (Math.abs(enemy.x - self.x) < 50 && Math.abs(enemy.y - self.y) < 50) {
            self.reset();
        }
    });
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Define player's movement
Player.prototype.handleInput = function(direction) {
    if (direction === 'left' && this.x > borders.left) {
        this.x -= 50;
    } else if (direction === 'left' && this.x <= borders.left) {
        this.x = this.x;
    }

    if (direction === 'right' && this.x < borders.right) {
        this.x += 50;
    } else if (direction === 'right' && this.x >= borders.right) {
        this.x = this.x;
    }

    if (direction === 'down' && this.y < borders.bottom) {
        this.y += 50;
    } else if (direction === 'down' && this.y >= borders.bottom) {
        this.y = this.y;
    }

    if (direction === 'up' && this.y > borders.up) {
        this.y -= 50;
    } else if (direction === 'up' && this.y <= borders.up) {
        this.reset();
    }
};

//Define borders
 var borders = {
    left: 0,
    right: 400,
    up: 45,
    bottom: 450
 };

//re-start player
 Player.prototype.reset = function(reset) {
    this.x = 200;
    this.y = 400;
 };

//add enemies
var allEnemies = [];
    allEnemies.push(new Enemy(-50, 0));
    allEnemies.push(new Enemy(-50, 25));
    allEnemies.push(new Enemy(-50, 50));
    allEnemies.push(new Enemy(-50, 75));
    allEnemies.push(new Enemy(-50, 100));
    allEnemies.push(new Enemy(-50, 125));
    allEnemies.push(new Enemy(-50, 150));
    allEnemies.push(new Enemy(-50, 175));
    allEnemies.push(new Enemy(-50, 200));
    allEnemies.push(new Enemy(-50, 225));

// add player
var player = new Player(200, 400);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
