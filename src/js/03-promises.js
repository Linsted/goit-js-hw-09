import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";  

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit)


function onSubmit(e) {
  e.preventDefault();
  const {delay, step, amount} = e.currentTarget.elements

 let delayStep = step.value;
 let amountOfProm = amount.value;
 let ourDelay = Number(delay.value);


for (let i = 1; i <= amountOfProm; i++) {

      
      createPromise(i, ourDelay)
      .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);})
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    ourDelay += Number(delayStep)
  }


}

function createPromise(position, delay) {


  const promise = new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
    if (shouldResolve) {
        resolve({ position, delay })
      } else {
      reject({ position, delay })
    }
    }, delay)
    
  })

  return promise;
  
  
}

