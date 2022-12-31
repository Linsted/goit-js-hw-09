
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";



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


const refs = {
  datePicker: document.querySelector('#datetime-picker'),
  buttonStart: document.querySelector(`button[data-start]`),
  spanSeconds: document.querySelector(`span[data-seconds]`),

}

refs.buttonStart.disabled = true;


console.log(4);




const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      
    if (selectedDates[0].getTime() < options.defaultDate.getTime())
    { return alert("Please choose a date in the future") };
      refs.buttonStart.disabled = false;   
  },
};
flatpickr(refs.datePicker, options)









// if (smt && smt < options.defaultDate.getTime()) { console.log(options.defaultDate.getTime()); };









