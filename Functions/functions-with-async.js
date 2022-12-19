async function getData() {
  let people = await fetch("https://randomuser.me/api/?results=55");
  let data = await people.json();
  const diffy = document.querySelector('.container');
  data.results.forEach(item => {
    const imager = document.createElement('img');
    imager.src = item.picture.thumbnail;
    diffy.appendChild(imager);
  });
}

getData();
