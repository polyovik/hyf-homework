let firstWords = ["Easy", "Cool", "Cute", "Inspiring", "Awesome", "Creative", "Educational", "Futuristic", "Global", "Valuable"];
let secondWords = ["Startup", "Company", "Corporation", "People", "Crowd", "Minds", "Explorers", "Workers", "Atmosphere", "Workplace"];
const randomFirstWord = Math.floor(Math.random() * firstWords.length);
const randomSecondWord = Math.floor(Math.random() * secondWords.length);


let startupName = `${firstWords[randomFirstWord]} ${secondWords[randomSecondWord]}` ;
console.log(`The startup: "${startupName}" contains ${startupName.length} characters`);