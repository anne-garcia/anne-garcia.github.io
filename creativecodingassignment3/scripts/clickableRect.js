// This is a class structure
//This is included in both hotdog.js and startButton.j to handle the "clicking"
function clickableRect() {

    this.x;
    this.y;
    this.left;
    this.right;
    this.top;
    this.bottom;
    this.width;
    this.height;

    this.updateSize = function(newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight;
    }

    this.updatePosition = function(newX, newY) {
        this.x = newX;
        this.y = newY;

        const halfW = (this.width / 2);
        const halfH = (this.height / 2);

        this.left = this.x - halfW;
        this.right = this.x + halfW;
        this.top = this.y - halfH;
        this.bottom = this.y + halfH;  
    }


    this.isPointWithinBounds = function(clickX, clickY) {
        let inBounds = false;
        if (
            clickX >= this.left && 
            clickX <= this.right &&
            clickY <= this.bottom &&
            clickY >= this.top
        ) {
            inBounds = true;
        }

        return inBounds;
    }

    this.frame = function() {

    }

    // Check to hitbox "green" so it is visible for user to see
    // this.draw = function(context) {

    //     //To begin drawing the start button
    //     context.beginPath();
    //     context.rect(this.left, this.top, this.width, this.height);
    //     context.fillStyle = 'green';
    //     context.fill();
    // }
}