//Returns the day of the week for a given date
function dayOfTheWeek(date) {
          const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                       "Thursday", "Friday", "Saturday"];
                       
          return daysOfTheWeek[date.getDay()];
        }
        
// returns a greeting

function greeting(date) {
    return `Hello, World! Happy ${dayOfTheWeek(date)}-no from a file!`;
}