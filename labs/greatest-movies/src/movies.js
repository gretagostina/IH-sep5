import { movies } from './data.js';

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// V1 REGULAR FUNCTION
function getAllDirectors(moviesArray) {
  const rawList = moviesArray.map((movie) => movie.director);

  const cleanList = rawList.filter((director, index) => {
    return rawList.indexOf(director) === index;
  });
  return cleanList;
}
// console.log(`1. Clean List of All Directors:`);
// console.log(getAllDirectors(movies));

// V2 - Arrow Function
// const getAllDirectors2 = (movieArray) => {
//   const rawList = movieArray.map((movie) => movie.director);
//   const cleanList = rawList.filter(
//     (director, index) => rawList.indexOf(director) === index
//   );
//   return cleanList;
// };
// console.log(`1. Clean List of All Directors:`);
// console.log(getAllDirectors2(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// function howManyMovies(moviesArray) { }
// const howManyMovies2 = () => {}

// V1 - Arrow function
// const howManyMovies2 = (moviesArray) => {
//   // 1st nos creamos una vairable que filtremos en el moviesArray para conseguir un valor de "steven spielrberg"
//   const steven = moviesArray.filter(
//     (movieItem) => movieItem.director === "Steven Spielberg"
//   );
//   // 2dn vamos a generar una variable nueva para filtrar los generos de peliculas que corresponden al genero de drama que viene por defecto de la variable que tenemos arriba con el nombre de steven.
//   const dramaMovies = steven.filter((spielberg) =>
//     spielberg.genre.includes("Drama")
//   );
//   return dramaMovies;
// };

//V2 -  Regular Function
function howManyMovies(moviesArray) {
  const steven = moviesArray.filter(
    (movie) => movie.director === 'Steven Spielberg'
  );
  const dramaMovies = steven.filter((movie) => movie.genre.includes('Drama'));
  return dramaMovies;
}

// console.log(`2. List of Drama Movies:`);
// console.log(howManyMovies(movies));

//V3 - Regular Function using less code - ABDEL's Solution
function howManyMoviesAbdel(moviesArray) {
  const dramaMovies = moviesArray.filter(
    (movieItem) =>
      movieItem.director === 'Steven Spielberg' &&
      movieItem.genre.includes('Drama')
  );
  return dramaMovies;
}
// console.log(`2. List of Drama Movies:`);
// console.log(howManyMoviesAbdel(movies));

// V4 - Regular Function - Using 2 Arguments - PABLO's Solution
function howManyMoviesPablo(moviesArray, director) {
  // array.filter() method to create new array w/just films of a certain director
  return moviesArray.filter(
    (movies) => movies.director === director && movies.genre.includes('Drama')
  );
}
// console.log(`2. List of Drama Movies using 2 arguments:`);
// console.log(howManyMoviesPablo(movies, 'Quentin Tarantino'));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// function scoresAverage(moviesArray) {}

// V1 - Using a map method and a toFixed method
function scoresAverage(moviesArray) {
  let totalSum = 0;

  const scores = moviesArray.map((movie) => movie.score);
  for (let i = 0; i < scores.length; i++) {
    totalSum = scores[i] + totalSum;
  }
  const accruedMovieScore = totalSum / moviesArray.length;
  return accruedMovieScore.toFixed(2);
}
// console.log(`3. Average scores for all movies:`);
// console.log(scoresAverage(movies));

// V2 - Using a reduce() and a toFixed()
function scoresAvergaeUsingaReduce(moviesArray) {
  const scores = moviesArray.reduce((total, movie) => {
    return (total += movie.score);
  }, 0);
  const accruedMovieScore = scores / moviesArray.length;
  return accruedMovieScore.toFixed(2);
}
// console.log(`3. Average scores for all movies using a reduce function:`);
// console.log(scoresAvergaeUsingaReduce(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const drama = moviesArray.filter((movie) => {
    return movie.genre.includes('Drama');
  });

  const scores = drama.reduce((total, movie) => {
    return total + movie.score;
  }, 0);

  const totalDramaScore = scores / drama.length;
  return totalDramaScore.toFixed(2);
}
// console.log(`4. Average scores for all DRAMA movies using a reduce function:`);
// console.log(dramaMoviesScore(movies));

// V2 - Arrow Function - Filter() Map() - MARC's Solution
const dramaMoviesScoreMarc = (moviesArray) => {
  const drama = moviesArray.filter((movieDrama) => {
    return movieDrama.genre.includes('Drama');
  });

  const scoress = drama.map((movie) => movie.score);

  let patata = 0;

  scoress.forEach((scores) => (patata += scores));

  return (patata / drama.length).toFixed(2);
};
// console.log(`loko average de drama`);
// console.log(dramaMoviesScoreMarc(movies));

// V3 - Regular Function - filter() forEach() - ABDEL's Solution
function dramaMoviesScoreAbdel(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes('Drama')
  );
  let sum = 0;
  dramaMovies.forEach((movie) => (sum += movie.score));
  return sum / dramaMovies.length;
}

// console.log(`Abdel average de drama`);
// console.log(dramaMoviesScoreAbdel(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// V1 - Regular Function - Using a sort()
function orderByYear(moviesArray) {
  const orderedList = moviesArray.sort((a, b) => a.year - b.year);
  return orderedList;
}
// console.log(`5. List of movies ordered by year ascending`);
// console.log(orderByYear(movies));

// V2 - Regular Function - spread... operator PABLO's Solution
function orderByYearPablo(moviesArray) {
  // 1st -> spread operator to clone original array so original array doesn´t mutate it if we change the new array
  const cloneMovieArray = [...moviesArray];
  // 2nd -> concatenate 2 array.sort() methods -> 1st to classify movies by their titles from A to Z (aaa, aab, abb, abc, acb...) and the second sort to arrange them in ascending order by year
  return cloneMovieArray
    .sort((a, b) => {
      if (a.title < b.title) return -1;
    })
    .sort((a, b) => a.year - b.year);
}
console.log(`5. Order movies array by ascending year `);
console.log(orderByYearPablo(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
}

console.log(`6. First 20 movies rodered by title`);
console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
