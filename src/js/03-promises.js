import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";  


const refs = {
  inputDelay: document.querySelector('[name="delay"]'),
  inputStep: document.querySelector('[name="step"]'),
  inputAmount: document.querySelector('[name="amount"]'),
  button: document.querySelector('[type="submit"]'),
  form: document.querySelector('.form'),
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

let firstDelay;
let delayStep;
let amount;


function onFormSubmit(e) {
  e.preventDefault();
  
  firstDelay = refs.inputDelay.value;
  delayStep = refs.inputStep.value;
  amount = refs.inputAmount.value;
  console.log(firstDelay, delayStep, amount );

}


console.log(7);
refs.form.addEventListener('submit', onFormSubmit)