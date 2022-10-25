const balance = 1000;

if (balance <= 0) {
  console.log('Please deposit some money!');
} else if (balance > 0 && balance <= 1000) {
  console.log('Your balance is looking okay');
} else if (balance > 1000 && balance <= 3000) {
  console.log('Your balance is looking good');
} else if (balance > 3000 && balance <= 10000) {
  console.log('Your balance is fantastic');
} else {
  console.log('Your balance is AMAZING!');
}




/////////////

  /* Rewrite this with ternary operator: 
   let result;
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}*/

/* let result
let checkResult = a + b < 4 ? result = 'Below' : result = 'Over'; */


////////////////////////

/* for (let i = 10; i >= 0 ; i--) { // 
    if (i = 10) {
      console.log("OMG it started");
    } else if (i = 0) {
      console.log("Happy new year!");
      break
    }
  } */


    ////////////
    const friends = ['Chris', 'Anne', 'Colin', 'Terri', 'Lola', 'Phil', 'Sam', 'Kay', 'Bruce'];
    const count = [];
    for (let i = 0; i < friends.length; i++) { // 
      if (friends[i].includes('a') || friends[i].includes('A')) {
        count.push(friends[i]);
      } else {
        console.log(friends[i]);
      }
      
    }
  
    console.log(count);
  
    const foundLola = "Lola" 
    for (let i = 0; i < friends.length; i++) { // 
      if (friends[i] === foundLola) {
        console.log('found Lola');
        break
      } 
        console.log('no Lola in array');
    }
  
  
    /////////
    function min(a,b){
      if(a<b){
        return a;
      } else {
        return b;
      }
    }
  
    console.log(min(10, 2));
    console.log(min(10, 102));
  
  ///////////////
  let radius = 20;
  
  function getCircleArea(radius) {
    return Math.PI * (radius * radius);
  }
  
  console.log(getCircleArea(50));
  
  //////////////////
  function celciusToFahrenheit(celcius) {
    let celciusToFahrenheitConvertion = (celcius * 1.8) + 32;
    return celciusToFahrenheitConvertion
  }
  
  console.log(celciusToFahrenheit(20));
    
  


