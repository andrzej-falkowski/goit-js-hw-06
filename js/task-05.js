const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const getInputValue = ({ currentTarget }) => {
    if (currentTarget.value !== '') {
      outputName.textContent = currentTarget.value;
    } else {
        outputName.textContent = 'Anonymous';
    }
};

inputName.addEventListener("input",  getInputValue);
