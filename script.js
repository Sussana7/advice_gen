const adviceIdElement = document.getElementById("advice-id");
const adviceTextElement = document.getElementById("advice-text");
const diceButton = document.getElementById("dice-button");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const adviceId = data.slip.id;
      const adviceText = data.slip.advice;

      adviceIdElement.textContent = `Advice #${adviceId}`;
      adviceTextElement.textContent = `"${adviceText}"`;
    })
    .catch((error) => console.error("Error fetching advice:", error));
}

diceButton.addEventListener("click", getAdvice);

getAdvice();
