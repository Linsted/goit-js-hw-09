
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";  


const refs = {
  datePicker: document.querySelector('#datetime-picker'),
  buttonStart: document.querySelector(`button[data-start]`),
  spanSeconds: document.querySelector(`span[data-seconds]`),
  spanMinutes: document.querySelector(`span[data-minutes]`),
  spanDays: document.querySelector(`span[data-days]`),
  spanHours: document.querySelector(`span[data-hours]`),
}


let currentMs = 0;
refs.buttonStart.disabled = true;
let metricsObj = {};
let intervalId;
const OUR_DELAY = 1000;
let selectedDate;


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    if (selectedDates[0].getTime() < options.defaultDate.getTime())
    { return Notiflix.Notify.failure('Please choose a date in the future'); };
    refs.buttonStart.disabled = false;   
    
    

  },
};


refs.buttonStart.addEventListener('click', () => {
  refs.buttonStart.disabled = true;
  refs.datePicker.disabled = true;
      intervalId = setInterval(() => {
       currentMs = selectedDate - new Date().getTime(); 
    
       if (currentMs < 1000) {
         clearInterval(intervalId)};
       
        metricsObj = convertMs(currentMs);
        refs.spanSeconds.textContent = metricsObj.seconds.toString().padStart(2, '0');
        refs.spanMinutes.textContent = metricsObj.minutes.toString().padStart(2, '0');
        refs.spanHours.textContent = metricsObj.hours.toString().padStart(2, '0');
        refs.spanDays.textContent = metricsObj.days.toString().padStart(2, '0');
      
      }, OUR_DELAY)})


flatpickr(refs.datePicker, options)



















