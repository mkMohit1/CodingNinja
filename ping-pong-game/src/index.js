// import "./styles.css";
let app = document.getElementById("app").getBoundingClientRect();
let rod1 = document.getElementsByClassName("rod1")[0];
let rod2 = document.getElementsByClassName("rod2")[0];
let ball = document.getElementsByClassName("ball")[0];
let highestScore = localStorage.getItem("HighestScore");
let score = 0;
let temp = `Please use either "a" or "<<" arrow to move the rod left side.\nPlease use either "d" or ">>" arrow to move the rod right side.\nMatch will end if the ball touches either the top or bottom of the main body.`;
alert(`${highestScore && highestScore > 0 ? `Highest score is ${highestScore}\n` : ''}Note: Please click enter key to start the game\n${temp}`);

// Ball variables
let x = app.width / 2; // initial x position (center)
let y = app.height / 2; // initial y position (center)
let dx = 2; // movement in the x direction
let dy = 2; // movement in the y direction
const ballRadius = 10; // radius of the ball
const rodSpeed = 10; // speed of rod movement

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 65 || event.keyCode === 37) { // 'a' or 'left arrow' key
        if (rod1.offsetLeft > 0) {
            rod1.style.left = (rod1.offsetLeft - rodSpeed) + "px";
        }
        if (rod2.offsetLeft > 0) {
            rod2.style.left = (rod2.offsetLeft - rodSpeed) + "px";
        }
    }
    if (event.keyCode === 68 || event.keyCode === 39) { // 'd' or 'right arrow' key
        if ((rod1.offsetLeft + rod1.offsetWidth) < app.width) {
            rod1.style.left = (rod1.offsetLeft + rodSpeed) + "px";
        }
        if ((rod2.offsetLeft + rod2.offsetWidth) < app.width) {
            rod2.style.left = (rod2.offsetLeft + rodSpeed) + "px";
        }
    }
    if (event.keyCode === 13) { // Enter key
        moveball();
    }
});

function moveball() {
    x += dx;
    y += dy;

    // Check for collision with top or bottom walls
    if (y + dy < ballRadius || y + dy > app.height - ballRadius) {
        // Game over logic
        if (score > highestScore) {
            // Update highest score if the current score is higher
            highestScore = score;
            localStorage.setItem("HighestScore", highestScore);
        }
        score = 0; // Reset score
        x = app.width / 2; // Reset ball position to the center
        y = app.height / 2; // Reset ball position to the center
        dx = 2; // Reset movement direction
        dy = 2; // Reset movement direction
        alert(`Game over! Your score: ${score}\nHighest score: ${highestScore}`);
        return; // Stop the game loop
    }

    // Check for collision with left or right walls
    if (x + dx < ballRadius || x + dx > app.width - ballRadius) {
        dx = -dx; // Reverse the x-direction if the ball hits the left or right walls
    }

    // Check for collision with rods
    if(y+dy<(rod1.offsetHeight+ rod1.offsetTop) && x + dx > rod1.offsetLeft && x + dx < rod1.offsetLeft + rod1.offsetWidth){
        dy = -dy;
        score +=2;
    }
    if(y+dy>rod2.offsetTop -ballRadius && x + dx > rod2.offsetLeft && x + dx < rod2.offsetLeft + rod2.offsetWidth){
        dy = -dy; 
        score +=2;
    }

    // Update the position of the ball
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';

    // Call moveball again to continue the animation
    requestAnimationFrame(moveball);
}
