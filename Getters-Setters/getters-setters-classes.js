  class Person {
    constructor(fullname) {
      this.fullname = fullname;
    }

    set fullname(passedValues) {
        this._fullname = passedValues;
    }

    get fullname() {
      return this._fullname;
    }

    newMessage() {
      return "We have done it!";
    }
  }

const personArray = ['Gary Donnoway', 'Jason Brown', 'Peter Goddard', 'Mike Davidson',
                     'John Bland', 'Mary Cooper', 'Margaret Honnover', 'Pete Lamb'];

  let newPerson;

for (var i = 0; i < personArray.length; i++) {
  newPerson = new Person(personArray[i]);
  document.write(`New Person Added is : ${newPerson.fullname} <br>`);
}

document.write(`${newPerson.newMessage()}`);
