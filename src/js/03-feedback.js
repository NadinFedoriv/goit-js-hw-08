import throttle from "lodash.throttle";

const form = document.querySelector('form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const feedbackFormState = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
email.addEventListener('input', throttle(saveState, 500));
message.addEventListener('input', throttle(saveState, 500));

function saveState() {
const state = {
    email: email.value,
    message: message.value,
};
localStorage.setItem(feedbackFormState, JSON.stringify(state))
};

const savedState = localStorage.getItem(feedbackFormState);
if (savedState) {
    const parsedState = JSON.parse(savedState);
    email.value = parsedState.email;
    message.value = parsedState.message; 
    };

function onFormSubmit(evt) {
evt.preventDefault();
const formData = {
    email: email.value,
    message: message.value,
};
console.log(formData);
evt.currentTarget.reset();
localStorage.removeItem(feedbackFormState);
};

