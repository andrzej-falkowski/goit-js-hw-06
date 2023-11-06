
const decreaseButton = document.querySelector('button[data-action="decrement"]');
const increaseButton = document.querySelector('button[data-action="increment"]');

const totalCount = document.querySelector("#value");
let counterValue = 0;
totalCount.innerHTML = counterValue;

function decrementValue() {
    counterValue--;
    totalCount.innerHTML = counterValue;
}

function incrementValue() {
    counterValue++;
    totalCount.innerHTML = counterValue;
}

decreaseButton.addEventListener("click", decrementValue);
increaseButton.addEventListener("click", incrementValue);