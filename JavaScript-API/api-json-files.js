// Fetch API - JSON Files

// Example 1

const diffy = document.querySelector('.container1');
let lineDescr = ''

fetch(
  "https://gist.githubusercontent.com/JohanSwannie/10ec52c77bd989e512f6474d1686fb36/raw/39c5d068383a546070279c46268fd0702b2de7da/jswan-persons1.json"
)
  .then(response => response.json())
  .then(users => {
    console.log(`The JSON File Fetch was Successful`);
    users.map(user => {
      const differ = document.createElement('div');
      lineDescr = `${user.name} is a ${user.username}`;
      const lineText = document.createTextNode(lineDescr);
      differ.appendChild(lineText);
      diffy.appendChild(differ);
      lineDescr = '';
    });
  })
  .catch(error => console.log(`There was an error while fetching the JSON File`));

// Example 2


const diffy2 = document.querySelector('.container2');
let lineDescr2 = '';

fetchJson()
  .then(response => console.log(`The JSON File Fetch was successful`))
  .catch(error => console.log(`There was an error while fetching the JSON File - ${error}`));

async function fetchJson() {
  const response = await fetch("https://gist.githubusercontent.com/JohanSwannie/87b8ccd50037a033f6c6ff7eb5553cb7/raw/921c83f8bdfc2d3320bee4ffdbb4ae0180ac2c5a/jswan-tennisclub.json");
  const output = await response.json();
  output.map(player => {
    const differ2 = document.createElement('div');
    lineDescr2 = `${player.name} has joined the club on  ${player.joinDate} and has player ${player.matches} matches.`;
    const lineText2 = document.createTextNode(lineDescr2);
    differ2.appendChild(lineText2);
    diffy2.appendChild(differ2);
    lineDescr2 = '';
  });
}
