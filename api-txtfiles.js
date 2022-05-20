// Fetch API - Text Files

// Example 1

fetch('text01.txt')
.then(response => response.text())
.then(text => {
  document.getElementById('txtfile').innerText = text;
  console.log(`The fetch for the Text File was Successfull`);
})
.catch(error => console.log(`There is an error with fetching the TXT File - ${error}`));

// Example 2

fetchTxtFile()
  .then(response => console.log(`The fetch for the Text File was Successfull`))
  .catch(error => console.error(`There is an error with fetching the TXT File - ${error}`));

async function fetchTxtFile() {
  const response = await fetch('text01.txt');
  const quote =  await response.text();
  document.getElementById('txtfile').innerHTML = quote;
}
