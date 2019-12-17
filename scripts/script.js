console.log("script is linked");
$(document).ready(function () {
    //declare global variables
    // TIMER VARIABLES
    //-----------------------------------------------------
    var startBtn = document.querySelector("#start-button");
    var timerDisplay = document.querySelector("#timer");
    var timeRemaining = 0;
    var interval;
    var gameTitle = document.querySelector("#game-title");
    var questionText = document.querySelector
        ("#question-text");
    var choices = document.querySelector(".choice");
    var questionNum = 0;
    var isCorrect;
    var choice1 = document.querySelector("#choice1");
    var choice2 = document.querySelector("#choice2");
    var choice3 = document.querySelector("#choice3");
    var choice4 = document.querySelector("#choice4");

    startBtn.addEventListener("click", function () {
        startTimer();
        console.log(gameState);
    })

    //FUNCTIONS
    //----------------------------------------------------
    function timerSet() {
        timeRemaining = 60;
        clearInterval(interval);
    }

    function startTimer() {
        gameState = "playing";
        startBtn.setAttribute("style", "display:none");
        choices.setAttribute("style", "display:none");
        timerSet();
        beginGame();
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
        choices.setAttribute("style", "display:none");
        console.log("page reset");
    }

    function beginGame() {
        if (gameState === "playing") {
            questionFill();
            choiceFill();
        } else {
            stopTimer();
        }
    }

    function questionFill() {
        console.log("I'm here!");
        questionText.textContent = questions[questionNum].title;
        if (isCorrect === true) {
            questionNum++;
            console.log(questionNum);
        }
    }

    function choiceFill() {
        choices.setAttribute("style", "display:block");
        choice1.textContent = questions[questionNum].choices[0];
        choice2.textContent = questions[questionNum].choices[1];
        choice3.textContent = questions[questionNum].choices[2];
        choice4.textContent = questions[questionNum].choices[3];

    }
    // var i = 0;
    // if answer = questions[i].answer



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
