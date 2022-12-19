function createActualCarsList(allCars) {
  let flattenedArray = allCars.flat();
  let actualCars = new Set();
  flattenedArray.forEach(item => {
    actualCars.add(item);
  });
  const carsList = document.getElementById('carsList');
  actualCars.forEach(car => {
    let carOnList = document.createElement('li');
    carOnList.textContent = car;
    carsList.appendChild(carOnList);
  });
}

let cars1Array = ['Mercedes Benz', 'Volkswagen', 'BMW', 'Ford'];
let cars2Array = ['BMW', 'Fiat', 'Toyota', 'Mazda'];
let cars3Array = ['Volkswagen', 'Mazda', 'Holden', 'Nissan'];
let cars4Array = ['Bentley', 'Mercedes Benz', 'Suzuki', 'Fiat'];

createActualCarsList([cars1Array, cars2Array, cars3Array, cars4Array]);
