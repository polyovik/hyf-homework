let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let dogAge = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears){
    console.log(`Your dog will be ${dogAge * 7} dog years old in ${dogYearFuture}`);
    } else {
        console.log(`Your dog will be ${dogAge} human years old in ${dogYearFuture}`);
    }