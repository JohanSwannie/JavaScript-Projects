let createPerson = (name) => {
  let sex;

  return {
    setName: (newName) => {
      name = newName;
    },

    getName: () => {
      return name;
    },

    getSex: () => {
      return sex;
    },

    setSex: (newSex) => {
      if (typeof newSex === 'string' && (newSex.toLowerCase() === 'male' ||
          newSex.toLowerCase() === 'female')) {
        sex = newSex.toLowerCase();
      } else {
        sex = "invalid sex";
      }
    }
  };
};

const array1 = [];

let person = createPerson('Jennifer');
array1.push(person.getName());
person.setSex('Female');
array1.push(person.getSex());
person.setName('Oliver');
person.setSex('male');
array1.push(person.getName());
array1.push(person.getSex());

const pappa = document.querySelector('.container');
const pippie = document.createElement('p');
pippie.innerHTML = array1.join(' --- ');
pappa.appendChild(pippie);
