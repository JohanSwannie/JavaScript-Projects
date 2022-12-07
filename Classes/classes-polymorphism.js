  class Humans {
    constructor(_person1, _person2, _person3) {
      this.person1 = _person1;
      this.person2 = _person2;
      this.person3 = _person3;
    }

    personOne() {
      document.write(`<span style='font-family: "Trirong", serif; color:
      #FFF'>${this.person1} only likes ${this.person2} </span> </br>`);
    }

    personTwo() {
      document.write(`<span style='font-family: "Trirong", serif; color:
      #FFF'>${this.person2} only likes ${this.person1} </span> </br>`);
    }

    personThree() {
      document.write(`<span style='font-family: "Trirong", serif; color:
      #FFF'>${this.person3} only likes ${this.person2} </span> </br>`);
    }
  }

  class ExtraPerson extends Humans {
    constructor(_person1, _person2, _person3, _person4) {
      super(_person1, _person2, _person3);
      this.person4 = _person4;
    }

    personThree() {
      document.write(`<span style='font-family: "Trirong", serif; color:
      #FFF'>${this.person4} has reported that ${this.person3} likes
      ${this.person1} as well, inspite of the fact that ${this.person1}
      only likes ${this.person2} </span> </br>`);
    }

    personTwo() {
      super.personTwo();
      document.write(`<span style='font-family: "Trirong", serif; color:
      #FFF'>BUT A HUGE CHANGE IN ATTITUDE HAS OCCURED </span> </br>`);
      document.write(`<span style='font-family: "Trirong", serif; color:
      #FFF'>Although ${this.person2} only liked ${this.person1} before,
      she also now likes ${this.person3} </span>`);
    }
  }

  const p1 = new Humans('John', 'Mary', 'Luke');
  const p2 = new ExtraPerson('John', 'Mary', 'Luke', 'Paul');
  p2.personThree();
  p2.personTwo();
