function findObjectWithLastname(firstList, lastList) {
  const headingOne = document.querySelector('.heading1');
  const h4Descr = document.createElement('h4');
  h4Descr.textContent = 'Values from The First List';
  headingOne.appendChild(h4Descr);
  for (var i = 0; i < firstList.length; i++) {
    for (var value in firstList[i]) {
      if (firstList[i].hasOwnProperty(value)) {
        const pippie = document.createElement('p');
        pippie.textContent = `${value} : ${firstList[i][value]}`;
        pappie.appendChild(pippie);
      }
    }
  }
  const headingTwo = document.querySelector('.heading2');
  const h4Descr2 = document.createElement('h4');
  h4Descr2.textContent = 'Object Where Lastname Was Found';
  headingTwo.appendChild(h4Descr2);
  let object1 = [];
  let findKey = Object.keys(lastList);
  object1 = firstList.filter(item => findKey.every(key => item.hasOwnProperty(key)  && item[key] === lastList[key]));
  const pappie2 = document.querySelector('.container2');
  for (var j = 0; j < object1.length; j++) {
    for (var value in object1[j]) {
      if (object1[j].hasOwnProperty(value)) {
        const pippie2 = document.createElement('p');
        pippie2.textContent = `${value} : ${object1[j][value]}`;
        pappie2.appendChild(pippie2);
      }
    }
  }
}

const pappie = document.querySelector('.container');

findObjectWithLastname([{ firstName: "John", lastName: "Hunter" },
                        { firstName: "Julia", lastName: "Brown" },
                        { firstName: "Peter", lastName: "Zetta" },
                        { firstName: "Luke", lastName: "Vendetta" },
                        { firstName: "Barnie", lastName: "Black" },
                        { firstName: "Jason", lastName: "Carlos" }],
                        { lastName: "Vendetta" });
