const functions = {
  add: (a, b) => a + b,
  subtract: (x, y) => x - y,
  multiplication: (k, l) => k * l,
  modules: (s, t) => s % t,
  newClubMembers: () => {
    const nm = {};
    for (var i = 0; i < md.length; i++) {
      for (var k = 0; k < mD.length; k++) {
        nm[mD[k]] = md[i][k];
      }
      console.log(nm);
      if (p1.innerHTML === '') {
        p1.innerHTML = `${nm.fN} ${nm.lN} -- ${nm.dob} -- ${nm.jD} -- ${nm.jDt} -- ${nm.mS} -- ${nm.aD} -- ${nm.eM} -- ${nm.mN}`;
      } else {
        p2.innerHTML = `${nm.fN} ${nm.lN} -- ${nm.dob} -- ${nm.jD} -- ${nm.jDt} -- ${nm.mS} -- ${nm.aD} -- ${nm.eM} -- ${nm.mN}`;
      }
    }
    return nm;
  }
};

let mD = ['fN', 'lN', 'dob', 'jD',
  'jDt', 'mS', 'aD', 'eM', 'mN'
];
let md = [
  ['Peter', 'Brown', '28-10-1968', 'Software Developer', '01-06-1992',
    'Gold', 'Dallas, Texas, USA',
    'pbrown193@boundemail.com', 0481990912
  ],
  ['Mary', 'Progue', '13-04-1970', 'Shopify Business Owner', '01-05-2021',
    'Platinum', 'Greenville, North Carolina, USA',
    'mprogue@shopify.com', 0251992561
  ]
];

console.log('Adding result = ' + functions.add(15, 19));
console.log('Subtracting result = ' + functions.subtract(45, 19));
console.log('Multiplication result = ' + functions.multiplication(5, 28));
console.log('Modules result = ' + functions.modules(15, 4));

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

functions.newClubMembers();
