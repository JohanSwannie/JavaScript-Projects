const chooseNumber = (arr, funky) => {
  numbersChosen ++;
  const fIdx = arr.findIndex(funky);
  array1.push(fIdx >= 0 ? arr.slice(fIdx, fIdx + 1) : []);
};

const lottoNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
                  14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
                  25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
                  36, 37, 38, 39, 40, 41, 42, 43, 44, 45];


const pappie = document.querySelector('.container');
const pappie2 = document.querySelector('.lottoNumbers');
const pippie = document.createElement('p');

const lottoButty = document.getElementById("lotter");
const showButty = document.getElementById("completter");
const resetButty = document.getElementById("resetter");

let numbersChosen = 0;
let array1 = [];

lottoButty.addEventListener('click', () => {
  const randomInt = Math.floor(Math.random() * 45) + 1;
  chooseNumber(lottoNumbers, function(m) {return m === randomInt;});
  pippie.innerHTML = `Amount Of Lotto Numbers Chosen So Far =  ${numbersChosen}`;
  pappie.appendChild(pippie);
});

showButty.addEventListener('click', () => {
  if (array1.length < 1) {
    const pippie2 = document.createElement('p');
    pippie2.innerHTML = "0 Lotto Numbers Generated";
    pappie2.appendChild(pippie2);
    lottoButty.style.display = 'none';
    showButty.style.display = 'none';
    return;
  }
  const set1 = new Set(array1);
  set1.forEach((item, i) => {
    const h2Child = document.createElement('h2');
    h2Child.innerHTML = item;
    pappie2.appendChild(h2Child);
  });
  lottoButty.style.display = 'none';
  showButty.style.display = 'none';
});

resetButty.addEventListener('click', () => {
  location.reload();
});
