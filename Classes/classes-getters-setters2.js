  class Person {
    constructor(fullname, jobDescription, age, country) {
      this.fullname = fullname;
      this.jobDescription = jobDescription;
      this.age = age;
      this.country = country;
    }

    set fullname(passedValues) {
      this._fullname = passedValues;
    }

    get fullname() {
      return `${this._fullname} is a ${this.jobDescription}, is ${this.age} years old and lives in ${this.country}`;
    }

    newMessage() {
      return "We have done it!";
    }
  }

  const personArray = ['Gary Donnoway', 'Jason Brown', 'Peter Goddard', 'Mike Davidson',
    'John Bland', 'Mary Cooper', 'Margaret Honnover', 'Pete Lamb'
  ];

  const jobDescriptionArray = ['Network Engineer', 'Project Manager', 'CEO', 'Software Engineer',
    'Systems Programmer', 'Administrative Assistant', 'Secretary', 'Technical Specialist'
  ];

  const ageArray = [43, 48, 57, 39, 35, 27, 33, 44];

  const countryArray = ['England', 'Australia', 'Canada', 'South Africa', 'New Zealand', 'USA',
    'Scotland', 'New Zealand'
  ];


  let newPerson;
  let personDetailsArray = []

  for (var i = 0; i < personArray.length; i++) {
    newPerson = new Person(personArray[i], jobDescriptionArray[i], ageArray[i], countryArray[i]);
    personDetailsArray.push(`${newPerson.fullname}`);
  }

  const personDetails = document.querySelectorAll('.personDetails');
  const lastMessage = document.getElementById('lastMessage');

  personDetails.forEach((item, i) => {
    item.innerHTML = personDetailsArray[i];
  });

  lastMessage.innerHTML = newPerson.newMessage();
