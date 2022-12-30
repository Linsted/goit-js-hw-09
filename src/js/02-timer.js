
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const refs = {
    datePicker: document.querySelector('#datetime-picker')

}

let smt = 0;

console.log(1);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        return selectedDates[0].getTime()  
        // console.log(smt);
        
  },
};
flatpickr(refs.datePicker, options)

if (options.selectedDates) {alert(1)};






// if (smt && smt < options.defaultDate.getTime()) { console.log(options.defaultDate.getTime()); };









