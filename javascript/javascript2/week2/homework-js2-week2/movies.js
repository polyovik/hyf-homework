/* const movies = [
  {"title": "'71","year": 2014,"rating": 7.2,"votes": 41702,"running_times": 5940} etc.
]; */

/*  1. the movies with a short title */
const shortMovieTitles = movies.filter((movie) => {
  return movie.title.length < 5;
});


/*  2. long movie titles */
const longMovieTitles = movies.filter((movie) => {
  return movie.title.length > 10;
});


/* 3. made between 1980-1989 */
const eightiesMovies = movies.filter((movie) => {
  return movie.year >= 1980 && movie.year <= 1989;
});


/* 4. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4) */

const taggedMovies = movies.map((movie) => {
  if (movie.rating >= 7) {
    movie.tag = 'Good';
  }
  if (movie.rating < 7 && movie.rating >= 4) {
    movie.tag = 'Average';
  }
  if (movie.rating < 4) {
    movie.tag = 'Bad';
  }

  return movie;
});


/* 5. the movies rated higher than 6 */
const higherThan6 = movies.filter((movie) => movie.rating > 6).map((movie) => movie.rating);


/* 6.  Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. */
const keyWords = movies.filter(
  (movie) => movie.title.includes('Alien') || movie.title.includes('Surfer') || movie.title.includes('Benjamin')
).length;
console.log(keyWords);



/* 7.  movies where a word in the title is duplicated */
const duplicatedTitles = movies.filter((movie) => {
  const splittedTitle = movie.title.split(' ')
  return splittedTitle.some((word) => {
    return splittedTitle.indexOf(word) !== splittedTitle.lastIndexOf(word) 
  })
});

console.log(duplicatedTitles);

/* 8. the average rating of all the movies */
const ratingCalculation = movies.map((movie) => {
  return movie.rating
}).reduce((rating1, rating2) => rating1 + rating2, 0) / movies.length
const averageRating = ratingCalculation.toFixed(1)
console.log(averageRating);

/* 9. Count the total number of Good, Average and Bad movies  */
const numberOfMoviesByTagCalculation  = (moviesToCalculate) => {
  const initialValues = {
    goodMovies: 0,
    averageMovies: 0,
    badMovies: 0
  }
  const calculation = moviesToCalculate.reduce((currentValue, movie) => {
    if (movie.tag === 'Good') {
      currentValue.goodMovies++
    }
    if (movie.tag === 'Average') {
      currentValue.averageMovies++
    }
    if (movie.tag === 'Bad') {
      currentValue.badMovies++
    }
    return currentValue
  }, initialValues)

  return calculation
}
const result = numberOfMoviesByTagCalculation(taggedMovies)
console.log(result);
