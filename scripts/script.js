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
    var rightOrWrong = document.getElementById("rightwrong");
    var userNames = [];
    var userScores = [];
    var highScores = [];

    startBtn.addEventListener("click", function (event) {
        event.preventDefault;
        startTimer();
        console.log(gameState);
    })

    choice1.addEventListener("click", function () {
        if (this.textContent === answers[questionNum]) {
            correctAnswer();
        } else {
            wrongAnswer();
        }

    })

    choice2.addEventListener("click", function () {
        if (this.textContent === answers[questionNum]) {
            correctAnswer();
        } else {
            wrongAnswer();

        }

    })

    choice3.addEventListener("click", function () {
        if (this.textContent === answers[questionNum]) {
            correctAnswer();
        } else {
            wrongAnswer();
        }

    })

    choice4.addEventListener("click", function () {
        if (this.textContent === answers[questionNum]) {
            correctAnswer();
        } else {
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
        toHighScores();
        timerDisplay.textContent = 0;
        timerSet();
        alert("Game over!")
        rightOrWrong.textContent = "";
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
        questionNum = 0;
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
        rightOrWrong.textContent = "Wrong!";
        displayTime();
        if (timeRemaining <= 0) {
            stopTimer();
        }
    }

    function correctAnswer() {
        questionNum++;
        if (questionNum == answers.length) {
            stopTimer();
        } else {
            rightOrWrong.textContent = "Correct!";
            questionFill();
            choiceFill();
        }
    }

    function toHighScores() {
        var userName = prompt("Enter your initials!");
        userNames.unshift(userName);
        var finalScore = (60 - timeRemaining);
        userScores.unshift(finalScore);
        userResults = { player: userName, score: finalScore }
        highScores.push(userResults);
        localStorage.setItem("scores", JSON.stringify(highScores));
        var userNameResult = JSON.parse(localStorage.getItem("scores"));
    }

    function printToScoreBoard(obj) {
        for (i = 0; i <= obj.length; i++) {
            $("#scores-list").append("<p></p>").text(obj[i]);
        }
    }





    //TO-DO
    //prepend the new user and score to the #scores-list div
    //have this stay constant despite the browser refreshing
});
