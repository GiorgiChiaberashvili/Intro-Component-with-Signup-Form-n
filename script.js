const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    inputs.forEach(input => {
        if (!input.value) {
            input.parentElement.classList.add('error');
            input.style.border = '1px solid red';
            input.placeholder = '';
            emailInput.value = "email@example/com";
            emailInput.style.color = 'red';
            emailInput.style.border = '1px solid red';
            emailInput.parentElement.classList.add('error')
        } else {
            input.parentElement.classList.remove('error');


            // if (input.type == 'email') {
            //     if ((input.value)) {
            //         input.parentElement.classList.remove('error');
            //     } else {
            //         input.parentElement.classList.add('error');
            //     }
            // }
        }
    })
});