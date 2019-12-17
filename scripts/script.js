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
    var choice1 = document.querySelector("#choice1");
    var choice2 = document.querySelector("#choice2");
    var choice3 = document.querySelector("#choice3");
    var choice4 = document.querySelector("#choice4");
    var answers = ["alerts", "parentheses", "all of the above", "quotes", "console.log"]
    var gameState;

    startBtn.addEventListener("click", function () {
        startTimer();
        console.log(gameState);
    })

    choice1.addEventListener("click", function () {
        console.log("clicked choice 1");
        if (this.textContent === answers[questionNum]) {
            console.log("correct");
            questionNum++;
            questionFill();
            choiceFill();
            console.log(questionNum);
        } else {
            console.log("wrong!");
            wrongAnswer();
        }

    })
    choice2.addEventListener("click", function () {
        console.log("clicked choice 2");
        if (this.textContent === answers[questionNum]) {
            console.log("correct");
            questionNum++;
            questionFill();
            choiceFill();
            console.log(questionNum);
        } else {
            console.log("wrong!");
            wrongAnswer();

        }

    })
    choice3.addEventListener("click", function () {
        console.log("clicked choice 3");
        if (this.textContent === answers[questionNum]) {
            console.log("correct");
            questionNum++;
            questionFill();
            choiceFill();
            console.log(questionNum);
        } else {
            console.log("wrong!");
            wrongAnswer();
        }

    })
    choice4.addEventListener("click", function () {
        console.log("clicked choice 4");
        if (this.textContent === answers[questionNum]) {
            console.log("correct");
            questionNum++;
            questionFill();
            choiceFill();
            console.log(questionNum);
        } else {
            console.log("wrong!");
            wrongAnswer();
        }

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

    }

    function choiceFill() {
        choices.setAttribute("style", "display:block");
        choice1.textContent = questions[questionNum].choices[0];
        choice2.textContent = questions[questionNum].choices[1];
        choice3.textContent = questions[questionNum].choices[2];
        choice4.textContent = questions[questionNum].choices[3];
    }

    function wrongAnswer() {
        timeRemaining = timeRemaining - 15;
        displayTime();
        if (timeRemaining <= 0) {
            stopTimer();
        }
    }






    // if the user clicks a button that !== questions[questionNum].answer
    // print "wrong" beneath the card
    // subtract 15 seconds from timeRemaining
    // else if
    // the user clicks the button whose text matches the answer
    // print "correct" beneath the card
    // questionNum++
    // questionFill();
    // choiceFill();



});
