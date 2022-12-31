
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  datePicker: document.querySelector('#datetime-picker'),
  buttonStart: document.querySelector(`button[data-start]`),
  spanSeconds: document.querySelector(`span[data-seconds]`),
  spanMinutes: document.querySelector(`span[data-minutes]`),
  spanDays: document.querySelector(`span[data-days]`),
  spanHours: document.querySelector(`span[data-hours]`),
}

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




let currentMs = 0;
refs.buttonStart.disabled = true;
let metricsObj = {};
let intervalId;




console.log(9);




const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      
    if (selectedDates[0].getTime() < options.defaultDate.getTime())
    { return alert("Please choose a date in the future") };
    refs.buttonStart.disabled = false;   
    
    refs.buttonStart.addEventListener('click', () => {
      intervalId = setInterval(() => {
       currentMs = selectedDates[0].getTime() - new Date().getTime(); 
       console.log(currentMs);
       
       
        metricsObj = convertMs(currentMs);
        refs.spanSeconds.textContent = metricsObj.seconds.toString().padStart(2, '0');
        refs.spanMinutes.textContent = metricsObj.minutes.toString().padStart(2, '0');
        refs.spanHours.textContent = metricsObj.hours.toString().padStart(2, '0');
        refs.spanDays.textContent = metricsObj.days.toString().padStart(2, '0');
      
      }, 1000)
})
    



  },
};
flatpickr(refs.datePicker, options)


if (currentMs === 0) {
         clearInterval(intervalId)};















