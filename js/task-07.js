const text = document.querySelector("#text");
const inputSize = document.querySelector("#font-size-control");

inputSize.addEventListener ("input", function() {
text.style.fontSize = `${inputSize.value}px`;
})