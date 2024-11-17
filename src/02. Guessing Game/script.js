document.addEventListener("DOMContentLoaded", () => {
  const guessInput = document.getElementById("guess-input");
  const guessInfo = document.getElementById("guess-info");
  const submmitBtn = document.getElementById("submit-btn");

  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);

  submmitBtn.addEventListener("click", (event) => {
    const guess = parseInt(guessInput.value);
    console.log(guess);
    if (isNaN(guess)) {
      guessIsEmpty();
    }

    if (guess > randomNumber) {
      guessIsTooHigh();
    } else if (guess < randomNumber) {
      guessIsTooLow();
    } else if (guess === randomNumber) {
      guessIsCorrect();

      submmitBtn.textContent = "Guess again";
      submmitBtn.addEventListener("click", () => {
        location.reload();
      });
    }
  });

  function guessIsEmpty() {
    guessInfo.textContent = "Please input a number!";
    guessInfo.style.display = "block";
    guessInfo.style.width = "100%";
    guessInfo.style.textAlign = "center";
    guessInfo.style.paddingBlock = "1rem";
    guessInfo.style.fontWeight = "500";
    guessInfo.style.border = "2px solid #1d4ed8";
    guessInfo.style.backgroundColor = "#3b82f6";
  }

  function guessIsTooHigh() {
    guessInfo.textContent = "Your guess is too high!";
    guessInfo.style.display = "block";
    guessInfo.style.width = "100%";
    guessInfo.style.textAlign = "center";
    guessInfo.style.paddingBlock = "1rem";
    guessInfo.style.fontWeight = "500";
    guessInfo.style.border = "2px solid #b91c1c";
    guessInfo.style.backgroundColor = "#ef4444";
  }

  function guessIsTooLow() {
    guessInfo.textContent = "Your guess is too low!";
    guessInfo.style.display = "block";
    guessInfo.style.width = "100%";
    guessInfo.style.textAlign = "center";
    guessInfo.style.paddingBlock = "1rem";
    guessInfo.style.fontWeight = "500";
    guessInfo.style.border = "2px solid #a16207";
    guessInfo.style.backgroundColor = "#eab308";
  }

  function guessIsCorrect() {
    guessInfo.textContent = "Congratulation! You guessed it right!";
    guessInfo.style.display = "block";
    guessInfo.style.width = "100%";
    guessInfo.style.textAlign = "center";
    guessInfo.style.paddingBlock = "1rem";
    guessInfo.style.fontWeight = "500";
    guessInfo.style.border = "2px solid #15803d";
    guessInfo.style.backgroundColor = "#22c55e";
  }
});
