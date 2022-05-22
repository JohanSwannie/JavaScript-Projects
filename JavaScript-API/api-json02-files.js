const btn = document.querySelector("#btn");
const clr = document.querySelector("#clr");
const output = document.querySelector(".container");
const url = "persons.json";

btn.onclick = () => {
  fetch(url)
  .then(response => response.json())
  .then(data => addData(data))
  .catch(error => console.error(error));
};

function addData(data) {
  let html = `<h3>Details on the persons json file.</h3>`;
  data.forEach(person => {
    html += `<div>The person with an ID of ${person.id} is ${person.firstName} ${person.lastName} and has a job description of ${person.jobDescription}.</div><br>`;
  });
  output.innerHTML = html;
}

clr.onclick = () => {
  output.innerHTML = '';
};
