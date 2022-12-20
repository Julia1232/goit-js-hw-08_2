

import throttle from 'lodash.throttle';

const FORM_KEY = "feedback-form-state"
const form = document.querySelector('.feedback-form');
const saveSettings = localStorage.getItem(FORM_KEY);
const parsedSettings = JSON.parse(saveSettings);

if (parsedSettings) {
  form.email.value = parsedSettings.email;
  form.message.value = parsedSettings.message;
}

form.addEventListener("input", throttle(printInput, 500))
function printInput(e) {
  e.preventDefault();
  const {
    elements: { email, message }
  } = this;
  localStorage.setItem(FORM_KEY, JSON.stringify({ email: email.value, message: message.value }))
};


form.addEventListener('submit', submitForm)

function submitForm(e) {
  e.preventDefault();
  const {
    elements: { email, message }
  } = e.currentTarget;
  if (email.value === "" || message.value === "") {
    return alert("Please fill form")
  }
  console.log({ email: email.value, message: message.value });
  e.currentTarget.reset();
  localStorage.removeItem(FORM_KEY);
}