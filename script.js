document.addEventListener('DOMContentLoaded', () => {
const numbre_card = document.querySelector('.card_numbre'); 
const name_card = document.querySelector('.name'); 
const date_experation_month = document.querySelector('.month');
const date_experation_years = document.querySelector('.years');
const cvc_code = document.querySelector('.code_cvc');
const errors = document.querySelectorAll('.error');
const complete_state = document.querySelector('.information'); 

const input_numbre = document.querySelector('.card_numbre_input');
const input_name = document.querySelector('.cardholder_name'); 
const input_date_experation_month = document.querySelector('.month_input'); 
const input_date_experation_year = document.querySelector('.years_input'); 
const input_cvc_code = document.querySelector('.cvc_code');
const send_info = document.querySelector('button'); 

// Event listeners to update the card as the user types
input_numbre.addEventListener('input', () => {
    numbre_card.textContent = input_numbre.value || '0000 0000 0000 0000'; // Show default text if empty
});

input_name.addEventListener('input', () => {
    name_card.textContent = input_name.value || 'Jane Doe'; // Show default text if empty
});

input_date_experation_month.addEventListener('input', () => {
    date_experation_month.textContent = input_date_experation_month.value || 'MM'; // Show default text if empty
});

input_date_experation_year.addEventListener('input', () => {
    date_experation_years.textContent = input_date_experation_year.value || 'YY'; // Show default text if empty
});

input_cvc_code.addEventListener('input', () => {
    cvc_code.textContent = input_cvc_code.value || '000'; // Show default text if empty
});

// Validation and submission
send_info.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    let isValid = true;

    isValid &= validate_input(input_numbre, errors[0]);
    isValid &= validate_input(input_name, errors[1]);
    isValid &= validate_input(input_date_experation_month, errors[2]);
    isValid &= validate_input(input_date_experation_year, errors[3]);
    isValid &= validate_input(input_cvc_code, errors[4]);

    if (isValid) {
        show_complete_state(); // Show the success state
    }

    console.log("clicked");
});

function validate_input(input,errors) {
    if (input.value.trim() === "") {
    //    errors.innerHTML = "filed cannot be empty";
    //    errors.style.color="red"; // Set the  color to red
        input.style.borderColor = "red"; // Set the border color to red
        return false; // Validation failed
    } else {
    //    errors.innerHTML = ""; // Clear the error message if input is valid
    //     errors.style.color = ""; // Reset the border color
        input.style.borderColor = ""; // rest the border color 
        return true; // Validation passed
    }
}

function show_complete_state() {

    console.log("complete_state"); 
       complete_state.innerHTML = `<div class="complete_state">
        <div class="image_state">
            <img src="images/icon-complete.svg" alt="complete"/>
        </div>
        <div class="">
            <h1 class="title">Thank you!</h1>
            <p class="text">We've added your card details.</p>
            <button class="continue">Continue</button>
        </div>
    </div>`;
}

});