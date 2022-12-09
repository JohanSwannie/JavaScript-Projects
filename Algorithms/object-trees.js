function getSiblings(family) {
  if (family.siblings.length === 0) {
    return;
  }


  family.siblings.forEach(sibling => {
    document.write(`<p style="color: #FFF; text-align: center">${sibling.fullName}</p></br>`);
    getSiblings(sibling);
  });

}

const family = {
  fullName: 'Pete Lamb',
  siblings: [
    {
      fullName: 'Graham Sidaway',
      siblings: [
        {
          fullName: 'Brendan Sheehan',
          siblings: []
        },
        {
          fullName: 'Paul Murray',
          siblings: [
            {
              fullName: 'Peter Murray',
              siblings: []
            },
            {
              fullName: 'Josh Murray',
              siblings: []
            },
            {
              fullName: 'Michelle Murray',
              siblings: []
            },
            {
              fullName: 'Matthew Murray',
              siblings: []
            },
            {
              fullName: 'Luke Murray',
              siblings: []
            },
            {
              fullName: 'Julia Murray',
              siblings: []
            },
            {
              fullName: 'Mary Murray',
              siblings: []
            }
          ]
        }
      ]
    }
  ]
};

getSiblings(family);
