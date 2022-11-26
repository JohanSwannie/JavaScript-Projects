function addMoreToEstelleFamily(family) {
  family.grandchildren = 4;
  family.nephews = 8;
  family.nieces = 7;
}

let family = {
  parents: 2,
  sisters: 5,
  brothers: 1,
  daughters: 2,
  sons: 0
};

const diffy1 = document.querySelector('.container1');

const h21Element = document.createElement('h2');
const h21TextDescr = document.createTextNode("Family before addition");
h21Element.style.textDecoration = 'underline';
h21Element.appendChild(h21TextDescr);

diffy1.appendChild(h21Element);

for (var value in family) {
  if (family.hasOwnProperty(value)) {
    const p1Element = document.createElement('p');
    p1Element.innerHTML = `${value} : ${family[value]}`;
    diffy1.appendChild(p1Element);
  }
}

const diffy2 = document.querySelector('.buttons');

const butty = document.createElement('button');
const buttyTextDescr = document.createTextNode("Add More To Family");
butty.classList.add('butter');
butty.appendChild(buttyTextDescr);
diffy2.appendChild(butty);

const diffy3 = document.querySelector('.container2');

const h22Element = document.createElement('h2');
const h22TextDescr = document.createTextNode("Family after addition");
h22Element.style.textDecoration = 'underline';
h22Element.appendChild(h22TextDescr);

diffy3.appendChild(h22Element);

const butterMan = document.querySelector('.butter');

butterMan.addEventListener('click', () => {
  addMoreToEstelleFamily(family);
  for (var value in family) {
    if (family.hasOwnProperty(value)) {
      const p2Element = document.createElement('p');
      p2Element.innerHTML = `${value} : ${family[value]}`;
      diffy3.appendChild(p2Element);
    }
  }
  butterMan.style.display = "none";
});
