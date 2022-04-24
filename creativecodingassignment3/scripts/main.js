// Initialize the canvas
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");


//Start Button
const startBtn = new startButton(canvas.width, canvas.height);
startBtn.create();
startBtn.draw(context);


//Hot Dog
const runningDog = new hotdog(canvas.width, canvas.height);
runningDog.create();


let matchScore = 0;
let highScore = 0;


let reqAnimFrameId;
function animateHotDog() {

    reqAnimFrameId = window.requestAnimationFrame(animateHotDog);


    // General Updates
    const isGameOver = runningDog.frame();

    //Clear previous frames
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Drawing
    runningDog.draw(context);


    if(isGameOver) {
        gameOver();
    }
    else {
        // Display ongoing match score
        context.font = '30px verdana';
        context.fillStyle = 'black';
        context.fillText(`${matchScore}`, 20, 40);
    }
}


function incrementScore() {
    matchScore++;
    if(matchScore > highScore) {
        highScore = matchScore;
    }

    // console.log(`Match score <${matchScore}>, high score <${highScore}>`);
}


function gameOver() {
    window.cancelAnimationFrame(reqAnimFrameId);


    // Game over display text
    const gameOverMsg = "GAME OVER";
    console.log(gameOverMsg);

    context.font = '40px verdana';
    context.fillStyle = 'black';
    context.fillText(
        gameOverMsg, 
        (canvas.width / 2) - (context.measureText(gameOverMsg).width / 2),
        (canvas.height / 2) - 150
    );


    // Score display text
    const scoreText = `Match Score: ${matchScore}   |   High Score: ${highScore}`;

    context.font = '20px verdana';
    context.fillStyle = 'black';
    context.fillText(
        scoreText, 
        (canvas.width / 2) - (context.measureText(scoreText).width / 2),
        (canvas.height / 2) - 75
    );


    startBtn.isActive = true;
    startBtn.draw(context);

    runningDog.reset();

    matchScore = 0;
}


//Testing that HotDog can be drawn when it's done loading the image
// window.setTimeout(() => {
//     runningDog.draw(context);
// }, 3000);

canvas.addEventListener('mousedown', function(e) {
    const canvasRect = canvas.getBoundingClientRect();
    const clickPosition = {
        x: e.clientX - canvasRect.left,
        y: e.clientY - canvasRect.top
    };

    // console.log(`clickPosition: `, clickPosition);

    startBtn.getClick(clickPosition, animateHotDog);
    runningDog.getClick(clickPosition, incrementScore);
});