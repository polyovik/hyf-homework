const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function getEventWeekday(daysToEvent){
    return `Today is ${new Date()} and the event is on ${ week[(new Date().getDay() + daysToEvent) % week.length] }`
}

console.log(getEventWeekday(1));

