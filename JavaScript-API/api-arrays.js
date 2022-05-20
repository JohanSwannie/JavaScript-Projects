// Fetch API - Arrays

const TEXTFILES = [
  'info01.txt',
  'info02.txt',
  'info03.txt',
  'info04.txt'
];

const diffy = document.querySelector(".container");

fetchTextFiles(TEXTFILES)
  .then(response => console.log(`The fetches of all Text Files were Successful`))
  .catch(error => console.error(`There was an error while fetching the Text Files - ${error}`));

async function fetchTextFiles(files) {
  for (let file of files) {
    console.log(file);
    const response = await fetch(file);
    const TxtFile = await response.text();
    const pretag = document.createElement('pre');
    let text = document.createTextNode(TxtFile);
    pretag.appendChild(text);
    diffy.append(pretag);
  }
}
