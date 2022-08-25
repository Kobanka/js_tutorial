//Return the date of the week for the given date
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function dayName (date){
    return daysOfTheWeek[date.getDay()];
}
//Make greeting function 
function greeting (day){
    return `Hello, World! Happy ${dayName(day)}`;
}