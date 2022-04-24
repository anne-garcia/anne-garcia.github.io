function startButton(canvasWidth, canvasHeight) {

    const WIDTH = 150;
    const HEIGHT = 50;

    let startButtonText = 'Start';

    const xPosition = (canvasWidth / 2) - (WIDTH / 2);
    const yPosition = (canvasHeight / 2) - (HEIGHT / 2)

    const colorRect = 'orange';
    const colorText = 'black';

    this.img;
    this.clickObj;
    this.isActive;

    this.create = function() {
        this.clickObj = new clickableRect();
        this.clickObj.updateSize(WIDTH, HEIGHT);
        this.clickObj.updatePosition(xPosition + (WIDTH/2), yPosition + (HEIGHT/2));
        this.isActive = true;
    }

    this.getClick = function(clickPos, animateHotDogCallback) {
        // if this is not action exit out of the button
        if(this.isActive == false) return;

        if(this.clickObj.isPointWithinBounds(clickPos.x, clickPos.y)) {
            animateHotDogCallback();
            this.isActive = false;
            startButtonText = 'Restart';
        }
    }

    this.draw = function(context) {

        //To begin drawing the start button
        context.beginPath();
        context.rect(this.clickObj.left, this.clickObj.top, WIDTH, HEIGHT);
        context.fillStyle = colorRect;
        context.fill();

        //To draw text of start button
        context.font = '22px verdana';
        context.fillStyle = colorText;

        //Postitioning of text in start button
        context.fillText(
            startButtonText, 
            (canvasWidth / 2) - (context.measureText(startButtonText).width / 2),
            (canvasHeight / 2) - (HEIGHT / 2 - 33)
        );

        
        //Test to identify hitbox
        // this.clickObj.draw(context);
    }
}