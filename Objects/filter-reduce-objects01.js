// From the Array watchList get the average of imdbRating where the Director is "Christopher Nolan"

const watchList2 = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Director": "Christopher Nolan",
    "imdbRating": "8.8",
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Director": "Christopher Nolan",
    "imdbRating": "8.6",
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Director": "Christopher Nolan",
    "imdbRating": "9.0",
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Director": "Christopher Nolan",
    "imdbRating": "8.3",
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Director": "James Cameron",
    "imdbRating": "7.9",
  }
];

function getRating(watchList2) {
  let averageRating
  const filterDirector = watchList2.filter(item => item.Director === 'Christopher Nolan')
  const overallRating = filterDirector.reduce((sum, rating) => (sum + parseFloat(rating.imdbRating)), 0)
  averageRating = overallRating / filterDirector.length
  return averageRating;
}
console.log(getRating(watchList2));
