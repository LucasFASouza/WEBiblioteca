const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');

const result = document.querySelector('#result');

addButton.onclick = function() {
    n1 = parseInt(document.querySelector('#n1').value);
    n2 = parseInt(document.querySelector('#n2').value);
    result.innerHTML = n1 + n2;
}

subtractButton.onclick = function() {
    n1 = document.querySelector('#n1').value;
    n2 = document.querySelector('#n2').value;
    result.innerHTML = n1 - n2;
}

multiplyButton.onclick = function() {
    n1 = document.querySelector('#n1').value;
    n2 = document.querySelector('#n2').value;
    result.innerHTML = n1 * n2
}

divideButton.onclick = function() {
    n1 = document.querySelector('#n1').value;
    n2 = document.querySelector('#n2').value;
    result.innerHTML = n1 / n2;
}
