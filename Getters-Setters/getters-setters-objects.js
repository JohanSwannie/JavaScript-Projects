  const person = {
    name: 'Peter',
    surname: 'Brown',
    age: 43,
    jobDescription: 'Software Developer',
    hobbies: ['Tennis', 'Music', 'Picnic', 'Camping'],
    wishlist: ['15 Meter Boat', 'Waterway Property', 'Jetty'],
    get info() {
      return `${this.name} ${this.surname} is ${this.age} years old and likes ${this.randomHobby}`;
    },
    set extraHobbies(extraHobbies) {
      for (var i = 0; i < extraHobbies.length; i++) {
        this.hobbies.push(extraHobbies[i]);
      }
    },
    get randomHobby() {
      return this.hobbies[Math.floor(Math.random() * this.hobbies.length)];
    },
    get allInfo() {
      return `${this.name} ${this.surname} of age ${this.age} likes ${this.hobbies}`;
    },
    get firstWish() {
      return this.wishlist[0];
    },
    get lastWish() {
      return this.wishlist[this.wishlist.length - 1];
    }
  };

  document.write(`${person.info} </br>`);

  person.extraHobbies = ["Fishing", 'Walking', 'Gym', 'Reading'];

  document.write(`${person.info} </br>`);
  document.write(`${person.allInfo} </br>`);
  document.write(`${person.firstWish} </br>`);
  document.write(`${person.lastWish} </br>`);
