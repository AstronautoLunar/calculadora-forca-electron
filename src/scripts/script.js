const inputs = window.document.querySelectorAll('input');
const textResults = window.document.getElementById('results');
const buttonCalc = window.document.querySelector('button.button-calc');

buttonCalc.onclick = () => {
    textResults.innerText = `${inputs[0].value * inputs[1].value} N`;
}
