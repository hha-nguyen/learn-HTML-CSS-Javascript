/*
Based on Dark Blue by Thomas Palef.

Plans are submitted as an array of strings that forms a grid.


@ = Player start position
o = Coins
x = Solid surfaces
! = Non-moving lava
= = Vertical moving lava
v = Dripping lava
| = Horizontal moving lava

*/
var simpleLevelPlan = [
    "                      ",
    "                      ",
    "  x              = x  ",
    "  x         o o    x  ",
    "  x @      xxxxx   x  ",
    "  xxxxx            x  ",
    "      x!!!!!!!!!!!!x  ",
    "      xxxxxxxxxxxxxx  ",
    "                      "
  ];
  
  var GAME_LEVELS = [
    ["                                                                                ",
     "                                                                                ",
     "                                                                                ",
     "                                                                                ",
     "                                                                                ",
     "                                                                                ",
     "                                                                  xxx           ",
     "                                                   xx      xx    xx!xx          ",
     "                                    o o      xx                  x!!!x          ",
     "                                                                 xx!xx          ",
     "                                   xxxxx                          xvx           ",
     "                                                                            xx  ",
     "  xx                                      o o                                x  ",
     "  x                     o                                                    x  ",
     "  x                                      xxxxx                             o x  ",
     "  x          xxxx       o                                                    x  ",
     "  x  @       x  x                                                xxxxx       x  ",
     "  xxxxxxxxxxxx  xxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxx   xxxxxxxxx  ",
     "                              x   x                  x     x                    ",
     "                              x!!!x                  x!!!!!x                    ",
     "                              x!!!x                  x!!!!!x                    ",
     "                              xxxxx                  xxxxxxx                    ",
     "                                                                                ",
     "                                                                                "],
    ["                                      x!!x                        xxxxxxx                                    x!x  ",
     "                                      x!!x                     xxxx     xxxx                                 x!x  ",
     "                                      x!!xxxxxxxxxx           xx           xx                                x!x  ",
     "                                      xx!!!!!!!!!!xx         xx             xx                               x!x  ",
     "                                       xxxxxxxxxx!!x         x                                    o   o   o  x!x  ",
     "                                                xx!x         x     o   o                                    xx!x  ",
     "                                                 x!x         x                                xxxxxxxxxxxxxxx!!x  ",
     "                                                 xvx         x     x   x                        !!!!!!!!!!!!!!xx  ",
     "                                                             xx  |   |   |  xx            xxxxxxxxxxxxxxxxxxxxx   ",
     "                                                              xx!!!!!!!!!!!xx            v                        ",
     "                                                               xxxx!!!!!xxxx                                      ",
     "                                               x     x            xxxxxxx        xxx         xxx                  ",
     "                                               x     x                           x x         x x                  ",
     "                                               x     x                             x         x                    ",
     "                                               x     x                             xx        x                    ",
     "                                               xx    x                             x         x                    ",
     "                                               x     x      o  o     x   x         x         x                    ",
     "               xxxxxxx        xxx   xxx        x     x               x   x         x         x                    ",
     "              xx     xx         x   x          x     x     xxxxxx    x   x   xxxxxxxxx       x                    ",
     "             xx       xx        x o x          x    xx               x   x   x               x                    ",
     "     @       x         x        x   x          x     x               x   x   x               x                    ",
     "    xxx      x         x        x   x          x     x               x   xxxxx   xxxxxx      x                    ",
     "    x x      x         x       xx o xx         x     x               x     o     x x         x                    ",
     "!!!!x x!!!!!!x         x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x     =     x x         x                    ",
     "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!     xxxxxxxxxxxxx xx  o o  xx                    ",
     "!!!!x x!!!!!!x         x!!!!!x    o                 xx!!!!!!xx !                    xx     xx                     ",
     "!!!!x x!!!!!!x         x!!!!!x                     xx!!!!!!xx  !                     xxxxxxx                      ",
     "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx   !                                                  ",
     "!!!!x x!!!!!!x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                  ",
     "!!!!x x!!!!!!x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  "],
    ["                                                                                                              ",
     "                                                                                                              ",
     "                                                                                                              ",
     "                                                                                                              ",
     "                                                                                                              ",
     "                                        o                                                                     ",
     "                                                                                                              ",
     "                                        x                                                                     ",
     "                                        x                                                                     ",
     "                                        x                                                                     ",
     "                                        x                                                                     ",
     "                                       xxx                                                                    ",
     "                                       x x                 !!!        !!!  xxx                                ",
     "                                       x x                 !x!        !x!                                     ",
     "                                     xxx xxx                x          x                                      ",
     "                                      x   x                 x   oooo   x       xxx                            ",
     "                                      x   x                 x          x      x!!!x                           ",
     "                                      x   x                 xxxxxxxxxxxx       xxx                            ",
     "                                     xx   xx      x   x      x                                                ",
     "                                      x   xxxxxxxxx   xxxxxxxx              x x                               ",
     "                                      x   x           x                    x!!!x                              ",
     "                                      x   x           x                     xxx                               ",
     "                                     xx   xx          x                                                       ",
     "                                      x   x= = = =    x            xxx                                        ",
     "                                      x   x           x           x!!!x                                       ",
     "                                      x   x    = = = =x     o      xxx       xxx                              ",
     "                                     xx   xx          x                     x!!!x                             ",
     "                              o   o   x   x           x     x                xxv        xxx                   ",
     "                                      x   x           x              x                 x!!!x                  ",
     "                             xxx xxx xxx xxx     o o  x!!!!!!!!!!!!!!x                   vx                   ",
     "                             x xxx x x xxx x          x!!!!!!!!!!!!!!x                                        ",
     "                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
     "                             xx           xx                                         xxx                      ",
     "  xxx                         x     x     x                                         x!!!x                xxx  ",
     "  x x                         x    xxx    x                                          xxx                 x x  ",
     "  x                           x    xxx    xxxxxxx                        xxxxx                             x  ",
     "  x                           x           x                              x   x                             x  ",
     "  x                           xx          x                              x x x                             x  ",
     "  x                                       x       |xxxx|    |xxxx|     xxx xxx                             x  ",
     "  x                xxx             o o    x                              x         xxx                     x  ",
     "  x               xxxxx       xx          x                             xxx       x!!!x          x         x  ",
     "  x               oxxxo       x    xxx    x                             x x        xxx          xxx        x  ",
     "  x                xxx        xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx xx                    xxx        x  ",
     "  x      @          x         x           x!!x    x!!!!x    x!!!!x    xx   xx                    x         x  ",
     "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
     "                                                                                                              ",
     "                                                                                                              "],
    ["                                                                                                  xxx x       ",
     "                                                                                                      x       ",
     "                                                                                                  xxxxx       ",
     "                                                                                                  x           ",
     "                                                                                                  x xxx       ",
     "                          o                                                                       x x x       ",
     "                                                                                             o o oxxx x       ",
     "                   xxx                                                                                x       ",
     "       !  o  !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
     "       x     x                                                x   x x   x x   x x   x x   x x   x x           ",
     "       x= o  x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ",
     "       x     x                                                  x x   x x   x x   x x   x x   x x     x       ",
     "       !  o  !            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
     "                                                                                                              ",
     "          o              xxx                              xx                                                  ",
     "                                                                                                              ",
     "                                                                                                              ",
     "                                                      xx                                                      ",
     "                   xxx         xxx                                                                            ",
     "                                                                                                              ",
     "                          o                                                     x      x                      ",
     "                                                          xx     xx                                           ",
     "             xxx         xxx         xxx                                 x                  x                 ",
     "                                                                                                              ",
     "                                                                 ||                                           ",
     "  xxxxxxxxxxx                                                                                                 ",
     "  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ",
     "  x         x   x       x   x       x   x                 ||                  x     x                         ",
     "  x  @      xxxxx   o   xxxxx   o   xxxxx                                                                     ",
     "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
     "        x=                  =                =x   x                     xxx                                   ",
     "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
     "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
     "                                                                                                              "]
  ];
  
  // Assumes the plan is valid (add validation for production)
  function Level(plan) {
    this.width = plan[0].length;
    this.height = plan.length;
    // Array of arrays, each position containing null or a character
    this.grid = [];
    // Contains all of the dynamic objects (lava, coin or player),
    // along with their position and state
    this.actors = [];
    
    for (var y = 0; y < this.height; y++) {
      var line = plan[y], gridLine = [];
      for (var x = 0; x < this.width; x++) {
        var ch = line[x], fieldType = null;
        var Actor = actorChars[ch];
        if (Actor)
          // This constructs the referenced moving object in
          // actorChars and pushes it to the actors array
          this.actors.push(new Actor(new Vector(x, y), ch));
        else if (ch == 'x')
          // Wall
          fieldType = 'wall';
        else if (ch == '!')
          // Stationary lava
          fieldType = 'lava';
        gridLine.push(fieldType);
      }
      this.grid.push(gridLine);
    }
    // Find the Player actor
    this.player = this.actors.filter(function(actor) {
      return actor.type == 'player';
    })[0];
    // Track whether the player has won or lost;
    // finishDelay keeps the level active for a brief period of time
    this.status = this.finishDelay = null;
  }
  // Figure out if the level is finished
  Level.prototype.isFinished = function() {
    return this.status != null && this.finishDelay < 0;
  };
  // Figure out the collision area of an actor
  Level.prototype.obstacleAt = function(pos, size) {
    var xStart = Math.floor(pos.x);
    var xEnd = Math.ceil(pos.x + size.x);
    var yStart = Math.floor(pos.y);
    var yEnd = Math.ceil(pos.y + size.y);
    
    // The upper and side bounds of the level return a wall
    if (xStart < 0 || xEnd > this.width || yStart < 0)
      return 'wall';
    // The bottom bound returns lava
    if (yEnd > this.height)
      return 'lava';
    // Check what's on the grid around the collision box
    for (var y = yStart; y < yEnd; y++) {
      for (var x = xStart; x < xEnd; x++) {
        var fieldType = this.grid[y][x];
        // returns 'wall' or 'lava'
        if (fieldType) return fieldType;
      }
    }
  };
  // Track what actors overlap a given actor
  Level.prototype.actorAt = function(actor) {
    for (var i = 0; i < this.actors.length; i++) {
      var other = this.actors[i];
      if (other != actor &&
          actor.pos.x + actor.size.x > other.pos.x &&
          actor.pos.x < other.pos.x + other.size.x &&
          actor.pos.y + actor.size.y > other.pos.y &&
          actor.pos.y < other.pos.y + other.size.y)
        return other;
    }
  };
  // Time increment for Level.animate()
  var maxStep = 0.05;
  // Animate the level
  // step will be given in seconds, keys is an object that
  // contains info about the arrow keys the player has pressed.
  Level.prototype.animate = function(step, keys) {
    // Used for the delay at the end of a game
    if (this.status != null)
      this.finishDelay -= step;
    
    while (step > 0) {
      var thisStep = Math.min(step, maxStep);
      this.actors.forEach(function(actor) {
        actor.act(thisStep, this, keys);
      }, this);
      step -= thisStep;
    }
  };
  // Handle collisions between actors
  Level.prototype.playerTouched = function(type, actor) {
    // Lava's been touched
    if (type == 'lava' && this.status == null) {
      this.status = 'lost';
      this.finishDelay = 1;
    } else if (type == 'coin') { // a coin's been touched
      // Remove the coin that's been collected from actors array
      this.actors = this.actors.filter(function(other) {
        return other != actor;
      });
      // No more coins = you've won
      if (!this.actors.some(function(actor) {
        return actor.type == 'coin';
      })) {
        this.status = 'won';
        this.finishDelay = 1;
      }
    }
  }
  
  var actorChars = {
    '@': Player,
    'o': Coin,
    '=': Lava, '|': Lava, 'v': Lava
  };
  
  // Vector stores the position and size of an actor
  function Vector(x, y) {
    this.x = x; this.y = y;
  }
  Vector.prototype.plus = function(other) {
    return new Vector(this.x + other.x, this.y + other.y);
  }
  Vector.prototype.times = function(factor) {
    return new Vector(this.x * factor, this.y * factor);
  }
  
  // Player constructor
  function Player(pos) {
    // This properly aligns the bottom of the player
    // to the square below (adjusts for player height)
    this.pos = pos.plus(new Vector(0, -0.5));
    this.size = new Vector(0.8, 1.5);
    this.speed = new Vector(0, 0);
  }
  Player.prototype.type = 'player';
  // X and Y movement are handled independently because
  // a wall shouldn't stop the up and down motion of jumping
  // and a floor shouldn't stop side to side movement
  var playerXSpeed = 7;
  Player.prototype.moveX = function(step, level, keys) {
    this.speed.x = 0;
    if (keys.left) this.speed.x -= playerXSpeed;
    if (keys.right) this.speed.x += playerXSpeed;
    
    var motion = new Vector(this.speed.x * step, 0);
    var newPos = this.pos.plus(motion);
    var obstacle = level.obstacleAt(newPos, this.size);
    if (obstacle)
      level.playerTouched(obstacle);
    else
      this.pos = newPos;
  };
  var gravity = 30;
  var jumpSpeed = 17;
  Player.prototype.moveY = function(step, level, keys) {
    this.speed.y += step * gravity;
    var motion = new Vector(0, this.speed.y * step);
    var newPos = this.pos.plus(motion);
    var obstacle = level.obstacleAt(newPos, this.size);
    if (obstacle) {
      level.playerTouched(obstacle);
      if (keys.up && this.speed.y > 0)
        this.speed.y = -jumpSpeed;
      else
        this.speed.y = 0;
    } else {
      this.pos = newPos;
    }
  };
  Player.prototype.act = function(step, level, keys) {
    this.moveX(step, level, keys);
    this.moveY(step, level, keys);
    
    var otherActor = level.actorAt(this);
    if (otherActor)
      level.playerTouched(otherActor.type, otherActor);
    
    // Losing animation
    if (level.status == 'lost') {
      this.pos.y += step;
      this.size.y -=step;
    }
  };
  
  // Lava constructor
  function Lava(pos, ch) {
    this.pos = pos;
    this.size = new Vector(1, 1);
    if (ch == "=") {
      // I'm guessing that speed will be added to this.pos
      // in a moving method added later
      this.speed = new Vector(2, 0);
    } else if (ch == '|') {
      this.speed = new Vector(0, 2);
    } else if (ch == 'v') {
      this.speed = new Vector(0, 3);
      this.repeatPos = pos;
    }
  }
  Lava.prototype.type = 'lava';
  // Action
  Lava.prototype.act = function(step, level) {
    var newPos = this.pos.plus(this.speed.times(step));
    if (!level.obstacleAt(newPos, this.size))
      this.pos = newPos;
    else if (this.repeatPos)
      this.pos = this.repeatPos;
    else
      this.speed = this.speed.times(-1);
  };
  
  // Coin constructor
  function Coin(pos) {
    this.basePos = this.pos = pos.plus(new Vector(0.2, 0.1));
    this.size = new Vector(0.6, 0.6);
    this.wobble = Math.random() * Math.PI * 2;
  }
  Coin.prototype.type = 'coin';
  var wobbleSpeed = 8, wobbleDist = 0.07;
  // Action
  Coin.prototype.act = function(step) {
    this.wobble += step * wobbleSpeed;
    var wobblePos = Math.sin(this.wobble) * wobbleDist;
    this.pos = this.basePos.plus(new Vector(0, wobblePos));
  };
  
  // Helper function that creates an element
  // and gives it a class
  function elt(name, className) {
    var elt = document.createElement(name);
    if (className) elt.className = className;
    return elt;
  }
  
  // Tracking keypresses for player movement
  var arrowCodes = {37: 'left', 38: 'up', 39: 'right'};
  
  function trackKeys(codes) {
    var pressed = Object.create(null);
    function handler(event) {
      if (codes.hasOwnProperty(event.keyCode)) {
        var down = event.type == 'keydown';
        pressed[codes[event.keyCode]] = down;
        event.preventDefault();
      }
    }
    addEventListener('keydown', handler);
    addEventListener('keyup', handler);
    
    pressed.unregister = function() {
      removeEventListener('keydown', handler);
      removeEventListener('keyup', handler);
    };
    
    return pressed;
  }
  
  // Run the animation
  function runAnimation(frameFunc) {
    var lastTime = null;
    function frame(time) {
      var stop = false;
      if (lastTime != null) {
        var timeStep = Math.min(time - lastTime, 100) / 1000;
        stop = frameFunc(timeStep) === false;
      }
      lastTime = time;
      if (!stop)
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  
  // Run the level
  var arrows = trackKeys(arrowCodes);
  
  function runLevel(level, Display, andThen) {
    var display = new Display(document.body, level);
    // Used for storing pause state of the game
    var running = 'yes';
    
    function handleKey(event) {
      if (event.keyCode == 27) {
        if (running == 'no') {
          running = 'yes';
          runAnimation(animation);
        } else if (running == 'pausing') {
          running = 'yes';
        } else if (running == 'yes') {
          running = 'pausing';
        }
      }
    }
    addEventListener('keydown', handleKey);
    
    function animation(step) {
      if (running == 'pausing') {
        running = 'no';
        return false;
      }
      
      level.animate(step, arrows);
      display.drawFrame(step);
      if (level.isFinished()) {
        display.clear();
        // Remove the watch on the esc key 
        //removeEventListener('keydown', handleKey);
        // Unregister the arrow key listeners
        //arrows.unregister();
        if (andThen)
          andThen(level.status);
        return false;
      }
    }
    
    runAnimation(animation);
  }
  
  // Run the game
  function runGame(plans, Display) {
    var lives = 3;
    var livesSpan = document.getElementById('lives');
    var gameStatus = document.getElementById('status');
    
    function startLevel(n) {
      livesSpan.textContent = lives;
      runLevel(new Level(plans[n]), Display, function(status) {
        if (status == 'lost') {
          lives--;
          if (lives == 0) {
            gameStatus.textContent = 'Game Over';
            console.log('Game over');
          }
          else 
            startLevel(n);
        }
        else if (n < plans.length - 1)
          startLevel(n + 1);
        else
          console.log('You win!');
      });
    }
    startLevel(0);
  }
  
  
  // DOMDisplay uses the DOM to draw the program out
  function DOMDisplay(parent, level) {
    this.wrap = parent.appendChild(elt('div', 'game'));
    this.level = level;
    
    // Background is drawn only once
    this.wrap.appendChild(this.drawBackground());
    // The actorLayer is animated in the drawFrame() method
    this.actorLayer = null;
    this.drawFrame();
  }
  // Set the scale of 1 grid unit
  var scale = 20;
  // Draw the background
  DOMDisplay.prototype.drawBackground = function() {
    var table = elt('table', 'background');
    table.style.width = this.level.width * scale + 'px';
    this.level.grid.forEach(function(row) {
      var rowElt = table.appendChild(elt('tr'));
      rowElt.style.height = scale + 'px';
      row.forEach(function(type) {
        rowElt.appendChild(elt('td', type));
      });
    });
    return table;
  };
  // Draw the actors
  DOMDisplay.prototype.drawActors = function() {
    var wrap = elt('div');
    this.level.actors.forEach(function(actor) {
      var rect = wrap.appendChild(elt('div', 'actor ' + actor.type));
      rect.style.width  = actor.size.x * scale + 'px';
      rect.style.height = actor.size.y * scale + 'px';
      rect.style.left   = actor.pos.x * scale + 'px';
      rect.style.top    = actor.pos.y * scale + 'px';
    });
    return wrap;
  };
  // Redraw the actors
  DOMDisplay.prototype.drawFrame = function() {
    if (this.actorLayer)
      this.wrap.removeChild(this.actorLayer);
    this.actorLayer = this.wrap.appendChild(this.drawActors());
    // The status class is used to style the player based on
    // the state of the game (won or lost)
    this.wrap.className = 'game ' + (this.level.status || '');
    this.scrollPlayerIntoView();
  };
  // Make sure the player's always on screen
  DOMDisplay.prototype.scrollPlayerIntoView = function() {
    var width = this.wrap.clientWidth;
    var height = this.wrap.clientHeight;
    var margin = width / 3;
    
    // The viewport
    var left = this.wrap.scrollLeft, right = left + width;
    var top = this.wrap.scrollTop, bottom = top + height;
    
    // center makes use of the Vector methods defined earlier
    var player = this.level.player;
    var center = player.pos.plus(player.size.times(0.5))
                    .times(scale);
    
    if (center.x < left + margin)
      this.wrap.scrollLeft = center.x - margin;
    else if (center.x > right - margin)
      this.wrap.scrollLeft = center.x + margin - width;
    if (center.y < top + margin)
      this.wrap.scrollTop = center.y - margin;
    else if (center.y > bottom - margin)
      this.wrap.scrollTop = center.y + margin - height;
  }
  // Clear the level
  DOMDisplay.prototype.clear = function() {
    this.wrap.parentNode.removeChild(this.wrap);
  };
  
class CanvasDisplay { 
  constructor(parent, level) { 
    this.canvas = document.createElement("canvas"); 
    this.canvas.width = Math.min(600, level.width * scale); 
    this.canvas.height = Math.min(450, level.height * scale); 
    parent.appendChild(this.canvas); 
    this.cx = this.canvas.getContext("2d");
    this.flipPlayer = false;
    this.viewport = { 
      left: 0,
      top: 0, width: this.canvas.width / scale, 
      height: this.canvas.height / scale
    };
  }
  clear() { this.canvas.remove(); }
}

CanvasDisplay.prototype.syncState = function(state) { 
  this.updateViewport(state); 
  this.clearDisplay(state.status); 
  this.drawBackground(state.level); 
  this.drawActors(state.actors); 
};

CanvasDisplay.prototype.updateViewport = function(state) { 
  let view = this.viewport, margin = view.width / 3; 
  let player = state.player; 
  let center = player.pos.plus(player.size.times(0.5));
  if (center.x < view.left + margin) { 
    view.left = Math.max(center.x - margin, 0); 
  } else if (center.x > view.left + view.width - margin) { 
    view.left = Math.min(center.x + margin - view.width, state.level.width - view.width); 
  }
  if (center.y < view.top + margin) { 
    view.top = Math.max(center.y - margin, 0); 
  } else if (center.y > view.top + view.height - margin) { 
    view.top = Math.min(center.y + margin - view.height, state.level.height - view.height); 
  }
};


CanvasDisplay.prototype.clearDisplay = function(status) { 
  if (status == "won") { 
    this.cx.fillStyle = "rgb(68, 191, 255)"; 
  } else if (status == "lost") { 
    this.cx.fillStyle = "rgb(44, 136, 214)"; 
  } else { 
    this.cx.fillStyle = "rgb(52, 166, 251)"; 
  } 
  this.cx.fillRect(0, 0, this.canvas.width, this.canvas.height); 
};

let otherSprites = document.createElement("img"); 
otherSprites.src = "img/sprites.png";
CanvasDisplay.prototype.drawBackground = function(level) { 
  let {left, top, width, height} = this.viewport; 
  let xStart = Math.floor(left); 
  let xEnd = Math.ceil(left + width); 
  let yStart = Math.floor(top); 
  let yEnd = Math.ceil(top + height);

  for (let y = yStart; y < yEnd; y++) { 
    for (let x = xStart; x < xEnd; x++) { 
      let tile = level.rows[y][x]; 
      if (tile == "empty") continue; 
      let screenX = (x - left) * scale; 
      let screenY = (y - top) * scale; 
      let tileX = tile == "lava" ? scale : 0; 
      this.cx.drawImage(otherSprites, tileX, 0, scale, scale, screenX, screenY, scale, scale); 
    } 
  }
};

let playerSprites = document.createElement("img");
playerSprites.src = "../../image/interface/player.PNG"; 
const playerXOverlap = 4;
CanvasDisplay.prototype.drawPlayer = function(player, x, y, width, height){ 
  width += playerXOverlap * 2; x -= playerXOverlap; 
  if (player.speed.x != 0) { 
    this.flipPlayer = player.speed.x < 0; 
  }

  let tile = 8; 
  if (player.speed.y != 0) { 
    tile = 9; 
  } else if (player.speed.x != 0) { 
    tile = Math.floor(Date.now() / 60) % 8; 
  }
  this.cx.save(); 
  if (this.flipPlayer) { 
    flipHorizontally(this.cx, x + width / 2); 
  } 
  let tileX = tile * width; 
  this.cx.drawImage(playerSprites, tileX, 0, width, height, x, y, width, height); 
  this.cx.restore();
};

CanvasDisplay.prototype.drawActors = function(actors) { 
  for (let actor of actors) { 
    let width = actor.size.x * scale; 
    let height = actor.size.y * scale; 
    let x = (actor.pos.x - this.viewport.left) * scale; 
    let y = (actor.pos.y - this.viewport.top) * scale; 
    if (actor.type == "player") { 
      this.drawPlayer(actor, x, y, width, height); 
    } else { 
      let tileX = (actor.type == "coin" ? 2 : 1) * scale; 
      this.cx.drawImage(otherSprites, tileX, 0, width, height, x, y, width, height);
    }
  }
};
  


runGame(GAME_LEVELS, DOMDisplay);
  
  
  
  
  
  