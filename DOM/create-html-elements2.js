const papper = document.querySelector('.container');
const popper = document.createElement('p');
popper.setAttribute('id', 'popper1');
popper.classList.add('class1');
// popper.setAttribute('class', 'poppertjopper');
// popper.innerHTML = 'Here is some display TEXT';
// popper.innerText = 'Here is some display TEXT';
// popper.textContent = 'Here is some display TEXT';
const popDescr = document.createTextNode('Here is some display TEXT');
popper.appendChild(popDescr);
papper.appendChild(popper);

console.log(papper);

function toggleClass() {
  popper.classList.toggle('class1');
}

function removeClass() {
  popper.classList.remove('class1');
}

function removeElement() {
  popper.remove();
}

function startAllOver() {
  location.reload();
}
