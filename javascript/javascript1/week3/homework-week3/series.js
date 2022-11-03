const seriesDurations = [
  {
    title: "It's Always Sunny In Philadelphia",
    days: 2,
    hours: 11,
    minutes: 2,
  },
  {
    title: 'Better Call Saul',
    days: 4,
    hours: 10,
    minutes: 17,
  },
  {
    title: 'Breaking Bad',
    days: 6,
    hours: 8,
    minutes: 47,
  },
];

const myAge = 23;
let total = 0;

const calculatePercentageOfShowToAge = (show, lifeDurationInYears) => {
  const convertedDaysToMinutes = show.days * 24 * 60;
  const convertedHoursToMinutes = show.hours * 60;
  const minutesOfShow = show.minutes;
  const sumMinutesOfShow = convertedDaysToMinutes + convertedHoursToMinutes + minutesOfShow;
  const ageInMinutes = lifeDurationInYears * 365 * 24 * 60;
  let percentageOfSeries = (sumMinutesOfShow / ageInMinutes) * 100;
  percentageOfSeries = percentageOfSeries.toFixed(3);
  percentageOfSeries = Number.parseFloat(percentageOfSeries);

  return percentageOfSeries;
};

seriesDurations.forEach((show) => {
  const percentage = calculatePercentageOfShowToAge(show, myAge);
  total = total + percentage;
  console.log(`${show.title} took ${percentage}% of my life. `);
});
console.log(`In total that is ${total}% of my life`);
