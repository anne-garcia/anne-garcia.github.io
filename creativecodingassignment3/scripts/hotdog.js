function hotdog(canvasWidth, canvasHeight) {

    const WIDTH = 317;
    const HEIGHT = 218;
    const PIXEL_STEP_INCR = 2;

    const startXPosition = canvasWidth + WIDTH + 20;

    this.img;
    this.clickObj;
    this.isActive;

    this.pixelStep;

    this.create = function() {
        // Define the visual
        this.img = new Image(WIDTH, HEIGHT);
        this.img.src = "./images/runningHotDogCropped.gif";

        //image will be drawn per frame no need for "img.onload"
        // img.onload = function() {
        // };

        this.clickObj = new clickableRect();
        this.clickObj.updateSize(WIDTH, HEIGHT);

        this.reset();
    }

    this.reset = function() {
        this.isActive = true;
        this.clickObj.updatePosition(startXPosition, canvasHeight - HEIGHT/2);
        this.pixelStep = 3;
    }

    this.getClick = function(clickPos, incrementScoreCallback) {
        if(this.isActive == false) return;

        //Randomize y value so when hot dog is clicked it repositions randomly on the y axis while still being withing the canvas borders
        if(this.clickObj.isPointWithinBounds(clickPos.x, clickPos.y)) {
            const startYPosition = (Math.random() * (canvasHeight - HEIGHT)) + HEIGHT/2;
            this.clickObj.updatePosition(startXPosition, startYPosition);
            
            this.pixelStep += PIXEL_STEP_INCR;

            incrementScoreCallback();
        }
    }

    // Returns a boolean based on whether or not the game is over.
    this.frame = function() {
        if(this.isActive == false) return;

        //Update pos based on speed
        this.clickObj.updatePosition(this.clickObj.x - this.pixelStep, this.clickObj.y);

        // This checks if the dog goes off screen on the left side
        if (this.clickObj.x < -WIDTH - 20) {
            this.isActive = false;
            return true;
        }

        return false;
    }

    this.draw = function(context) {
        if(this.isActive == false) return;

        // context.drawImage(this.img, this.clickObj.x, this.clickObj.y); 
        context.drawImage(this.img, this.clickObj.left, this.clickObj.top); 

        //Test to identify hitbox
        // this.clickObj.draw(context);
    }
}