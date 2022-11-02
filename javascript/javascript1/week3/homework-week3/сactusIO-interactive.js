const activities = [];
const limitforScrollingSocials = 40;

const addActivity = (activity, duration) => {
  const todaysDate = new Date();
  const date = todaysDate.toLocaleDateString('da-DK');
  const singleActivity = { date, activity, duration };
  activities.push(singleActivity);
};

addActivity('reading', 30);
addActivity('studying', 60);
addActivity('studying', 100);
addActivity('scrolling', 160);
console.log(activities);

const showStatus = () => {
  let activitiesDuration = 0;
  if (!activities.length) {
    console.error('Activity Is Not Found');
    return null;
  }
  activities.forEach((activityInfo) => {
    if (activityInfo.activity === 'scrolling' && activityInfo.duration >= limitforScrollingSocials) {
      console.log('You have reached your limit, no more smartphoning for you!');
    }
    activitiesDuration += activityInfo.duration;
  });
  console.log(`You have added ${activities.length} activities. They amount to ${activitiesDuration} min. of usage`);
};

showStatus();


const calculateLongestActivity = (activitiesArray) => {
    let activitiesDurations = 0;
    activitiesArray.forEach((activity) => {
      activitiesDurations = activity.duration
    })
    console.log(activitiesDurations);
  const longestActivityDuration = Math.max(activitiesDurations);
  const longestActivity = activitiesArray.find((activity) =>{
    return longestActivityDuration === activity.duration
  })
  console.log(`Longest activity is ${longestActivity.activity} it takes ${longestActivityDuration} min.`);
};

calculateLongestActivity(activities);


