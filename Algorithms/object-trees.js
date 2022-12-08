function getSiblings(family) {
  if (family.siblings.length === 0) {
    return;
  }
  family.siblings.forEach(sibling => {
    document.write(`<span style="color: #FFF">${sibling.fullName}</span> </br> </br>`);
    getSiblings(sibling);
  });

}

const family = {
  fullName: 'Mike Davidson',
  siblings: [
    {
      fullName: 'Luke Mann',
      siblings: [
        {
          fullName: 'John Bland',
          siblings: []
        },
        {
          fullName: 'Mary Brown',
          siblings: [
            {
              fullName: 'Tinus Black',
              siblings: []
            },
            {
              fullName: 'Dorothy Sheehan',
              siblings: []
            },
            {
              fullName: 'Christo Thatcher',
              siblings: []
            },
            {
              fullName: 'Matthew Donnovan',
              siblings: []
            },
            {
              fullName: 'Paul Kotrotsos',
              siblings: []
            },
            {
              fullName: 'Neil Sidaway',
              siblings: []
            },
            {
              fullName: 'Mark Frost',
              siblings: []
            }
          ]
        }
      ]
    }
  ]
};

getSiblings(family);
