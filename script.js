let input = document.getElementById("text");
let btnEl = document.getElementById("btn");
let form = document.querySelector(".buttons");
let message = document.querySelector(".error-message");


form.addEventListener("submit", validate);
btnEl.addEventListener("click", validate);

function validate(e) {
    e.preventDefault();

    let inputValue = input.value.trim();
    
    if (inputValue === "") {
        message.style.display = "block";
        input.classList.add('input-error');
    } else if (!pattern(inputValue)) {
        message.style.display = "block";
        input.classList.add('input-error');
    } else {
        message.style.display = "none";
        input.classList.remove('input-error');
        form.reset()
 }
    
}


function pattern(input) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input);
}

