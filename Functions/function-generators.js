function* getCarList() {
  yield 'Mercedes Benz';
  yield 'BMW';
  yield 'Volvo';
  yield 'Ford';
  yield 'Toyota';
  yield 'Mazda';
  yield 'Fiat';
  yield 'Nissan';
  yield 'Volswagen';
}

const generateCars = getCarList();

const pappie = document.querySelector('.container');
const nextCar = document.getElementById('carButton');
const finalMsg = document.getElementById('finalMessage');

nextCar.addEventListener('click', () => {
  let currentCar = generateCars.next();
  if (currentCar.done) {
    finalMsg.style.display = 'block';
    finalMsg.innerHTML = "Car List Completed";
    nextCar.setAttribute('disabled', true);
  } else {
    let pipper = document.createElement('p');
    pipper.textContent = currentCar.value;
    pappie.appendChild(pipper);
  }
});
