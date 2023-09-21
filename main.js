const numberElement = document.querySelector('.number');
let number = 0

function plus() {
number ++
numberElement.innerHTML = number
}

function less() {
number --
if(number < 0) {
    return reset()
}
numberElement.innerHTML = number
}

 function reset() {
    number = 0
    numberElement.innerHTML = number
 }
