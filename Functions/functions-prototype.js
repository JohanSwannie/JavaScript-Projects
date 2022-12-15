function Movie(title, director, genre, releaseYear, rating) {
  this.title = title;
  this.director = director;
  this.genre = genre;
  this.releaseYear = releaseYear;
  this.rating = rating;
}

Movie.prototype.getOverview = function() {
  return `<b class='bul'>"${this.title}"</b>, a <b class='bul'>"${this.genre}"</b> movie, directed
          by <b class='bul'>"${this.director}"</b> was released in <b class='bul'>
          "${this.releaseYear}"</b> and received a rating of <b class='bul'>${this.rating}</b>
          out of 10`;
};

let arr1 = ['The early years', 'Charles Dickens', 'Early American', '1955', 9.5];
let arr2 = ['Pilot of the day', 'Peter Brown', 'Adventures', '1971', 7.5];
let arr3 = ['Trust my Village', 'Terry Sheehan', 'Humor', '1985', 8];
let arr4 = ['Dogs and Wolves', 'Richard Baker', 'Adventures', '1979', 6];
let arr5 = ['Trees of the World', 'Robert Wingham', 'Non Fiction', '2002', 7];

const test1 = new Movie(arr1[0], arr1[1], arr1[2], arr1[3], arr1[4]);
const test2 = new Movie(arr2[0], arr2[1], arr2[2], arr2[3], arr2[4]);
const test3 = new Movie(arr3[0], arr3[1], arr3[2], arr3[3], arr3[4]);
const test4 = new Movie(arr4[0], arr4[1], arr4[2], arr4[3], arr4[4]);
const test5 = new Movie(arr5[0], arr5[1], arr5[2], arr5[3], arr5[4]);

const movie = document.querySelectorAll('.movie');

movie.forEach((item, i) => {
  if (i === 0) {
    item.innerHTML = test1.getOverview();
  } else if (i === 1) {
    item.innerHTML = test2.getOverview();
  } else if (i === 2) {
    item.innerHTML = test3.getOverview();
  } else if (i === 3) {
    item.innerHTML = test4.getOverview();
  } else {
    item.innerHTML = test5.getOverview();
  }
});
