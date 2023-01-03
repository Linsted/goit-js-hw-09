import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";  


let firstDelay;
let delayStep;
let amount;
let ourDelay;
let ourDelayTimer;

const refs = {
  inputDelay: document.querySelector('[name="delay"]'),
  inputStep: document.querySelector('[name="step"]'),
  inputAmount: document.querySelector('[name="amount"]'),
  button: document.querySelector('[type="submit"]'),
  form: document.querySelector('.form'),
}


refs.form.addEventListener('submit', onSubmit)


function onSubmit(e) {
  e.preventDefault();
  firstDelay = refs.inputDelay.value;
  delayStep = refs.inputStep.value;
  amount = refs.inputAmount.value;
  ourDelayTimer = Number(firstDelay);
  ourDelay = Number(firstDelay);

 

  for (let i = 1; i <= amount; i++) {
    
    setTimeout(() => {
      
      createPromise(i, ourDelay)
      .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);})
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    ourDelay += Number(delayStep)
    }, ourDelayTimer)
    ourDelayTimer += Number(delayStep)
    
  }


}


function createPromise(position, delay) {

  


  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
      reject({ position, delay })}
  })

  return promise;
  
  
}

