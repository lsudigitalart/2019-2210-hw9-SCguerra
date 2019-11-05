var gif;
  
var squareOne;
var squareTwo;
var squareThree;

var Y2;
var Y3;
var Y1;

function preload() {
  gif = createImg("CzoP.gif");
  music = loadSound ("Vox Underscoring.wav");
}
function setup() {
    createCanvas(500, 342);
    music.play();
    Y1 = random(height);
    Y2 = random(height);
    Y3 = random(height);
  
    squareOne = new Square(30, 50, Y1, 0, 4);
    squareTwo = new Square(50, 250, Y2, 0, 5);
    squareThree = new Square(60, 400, Y3, 0, 7);
  }


  function draw() {
    clear();
    gif.position(10, 10);
    gif.style("z-index: -100");
  

    squareOne.update();
    squareOne.display();
  
    squareTwo.update();
    squareTwo.display();

    squareThree.update();
    squareThree.display();

  }

  function Square(tempSize, tempColorY, tempY, tempX, tempSpeed) {
    this.size = tempSize;
    this.colorY = tempColorY;
    this.yPos = tempY;
    this.xPos = tempX;
    this.speed = tempSpeed;
  
    this.update = function () {
      this.xPos = this.xPos + this.speed/2;
      this.colorY = tempColorY + 1;
    }

    this.display = function () {
      fill(this.colorY, 0, 0);
      rect(this.xPos * 0.5, this.yPos*2, this.size, this.size);
      rect(this.xPos * 1.5, this.yPos*3, this.size, this.size);
      rect(this.xPos * 2.5, this.yPos, this.size, this.size);
  }
}
  

