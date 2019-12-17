console.log("script is linked");
$(document).ready(function () {
    //declare global variables
    // TIMER VARIABLES
    //-----------------------------------------------------
    var startBtn = document.querySelector("#start-button");
    var timerDisplay = document.querySelector("#timer");
    var timeRemaining = 0;
    var interval;
    var gameTitle = document.querySelector("game-title");
    var questionText = document.querySelector("question-text");

    startBtn.addEventListener("click", function () {
        startTimer();
        console.log(gameState);
    })

    //TIMER FUNCTIONS
    //----------------------------------------------------
    function timerSet() {
        timeRemaining = 60;
        clearInterval(interval);
    }

    function startTimer() {
        gameState = "playing";
        startBtn.setAttribute("style", "display:none");
        timerSet();
        interval = setInterval(function () {
            timeRemaining--;
            displayTime();
        }, 1000);
    }

    function displayTime() {
        timerDisplay.textContent = timeRemaining;
        if (timeRemaining === 0) {
            stopTimer();
            resetPage();
        }
    }

    function stopTimer() {
        gameState = "not playing";
        timerDisplay.textContent = 0;
        timerSet();
        alert("Game over!")
        startBtn.setAttribute("style", "display:block")
        startBtn.textContent = "Retry?";
    }

    function resetPage() {
        gameTitle.textContent = "Coding Quiz Challenge!";
        questionText.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    }

    // write a function that populates the button text with the questions object
    // match questions.choices[i] to the ID of the button

    // write a function to fill the question and button choices

    // write a function to determine if an answer is correct
    // if the button clicked matches the answer
    // display "correct" below the card
    // progress to the next question
    // if the wrong button is clicked
    // subtract 10 seconds from the timer


});
