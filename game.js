const maxAttempts = 10; // Set the maximum number of attempts
    let playerName = "";
    let randomNumber = generateRandomNumber();
    let attempts = 0;

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function checkGuess() {
        const guessInput = document.getElementById('guess');
        const guess = parseInt(guessInput.value);

        // Check if the guess input is empty or not a number
        if (isNaN(guess)) {
            alert("Please enter a valid number.");
            return;
        }

        attempts++;

        if (guess === randomNumber) {
            document.getElementById('message').textContent = `Congratulations, ${playerName}! You guessed the number in ${attempts} attempts.`;
            document.getElementById('message').style.color = 'green';
            document.getElementById('submit').disabled = true;
            guessInput.disabled = true; // Disable the input field
        } else if (guess < randomNumber) {
            document.getElementById('message').textContent = 'Try a higher number.';
            document.getElementById('message').style.color = 'red';
        } else {
            document.getElementById('message').textContent = 'Try a lower number.';
            document.getElementById('message').style.color = 'red';
        }

        document.getElementById('attempts').textContent = attempts;

        if (attempts >= maxAttempts) {
            document.getElementById('message').textContent = `Out of attempts. The correct number was ${randomNumber}.`;
            document.getElementById('message').style.color = 'red';
            document.getElementById('submit').disabled = true;
            guessInput.disabled = true; // Disable the input field
        }

        // Clear the guess input field after each guess
        guessInput.value = '';
    }

    function play() {
        document.getElementById("home-page").style.display = "none";
        document.getElementById("user-name").style.display = "block";
    }

    function enter() {
        const playerInput = document.getElementById("player");
        const playerNameRegex = /^[A-Za-z]+$/;

        if (playerInput.value === "" || !playerNameRegex.test(playerInput.value)) {
            alert("Please enter a valid player name with letters only.");
        } else {
            playerName = playerInput.value;
            document.getElementById("user-name").style.display = "none";
            document.getElementById("game-page").style.display = "block";
            document.getElementById("welcome-message").innerText = `Welcome, ${playerName}!`;
        }
    }
	function goHome() {
    	playerName = "";
    	document.getElementById("game-page").style.display = "none";
    	document.getElementById("home-page").style.display = "block";
    	document.getElementById("player").value = ""; // Clear the player name input field
    	document.getElementById('submit').disabled = false;
    	document.getElementById('guess').disabled = false; // Enable the input field
    	document.getElementById('guess').value = '';
    	document.getElementById('message').textContent = '';
    	attempts = 0;
    	randomNumber = generateRandomNumber();
    	document.getElementById('attempts').textContent = attempts;
}


    function restartGame() {
        document.getElementById('submit').disabled = false;
        document.getElementById('guess').disabled = false; // Enable the input field
        document.getElementById('guess').value = '';
        document.getElementById('message').textContent = '';
        attempts = 0;
        randomNumber = generateRandomNumber();
        document.getElementById('attempts').textContent = attempts;
    }

