let countries = [
  ['Japan', 'jp'],
  ['Brazil', 'br'],
  ['France', 'fr'],
  ['Australia', 'au'],
  ['Austria', 'at'],
  ['Egypt', 'eg'],
  ['Germany', 'de'],
  ['Greece', 'gr'],
  ['Italy', 'it'],
  ['Netherlands', 'nl'],
  ['Portugal', 'pt'],
  ['Russia', 'ru'],
  ['Spain', 'es'],
  ['Turkey', 'tr'],
  ['United States', 'us'],
  ['United Kingdom', 'gb'],
  ['South Korea', 'kr'],
  ['India', 'in'],
  ['Mexico', 'mx'],
  ['Argentina', 'ar'],
  ['Peru', 'pe'],
  ['Switzerland', 'ch'],
  ['Canada', 'ca'],
  ['New Zealand', 'nz'],
  ['Singapore', 'sg'],
  ['Malaysia', 'my'],
  ['Thailand', 'th'],
  ['Indonesia', 'id'],
  ['Morocco', 'ma'],
  ['China', 'cn']
];
let selectedCountries = [];
let block = document.getElementById('grid');

window.addEventListener("load", function() {
  countries.forEach(element => {
    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    // .then(response => response.json()) // Преобразуем в JSON
    // .then(data => console.log(data.title)) // Выведем заголовок
    // .catch(error => console.error("Ошибка:", error));
    block.innerHTML += '<div class="country-card" onclick="openModal(\''+element[0]+'\', \''+element[1]+'\')"><img src="pictures/'+element[1]+'.png" alt="'+element[0]+'" class="country-image"><h3 class="country-name">'+element[0]+'</h3></div>';
  });
});

function openModal(country, initialD) {
    document.getElementById('countryModal').style.display = 'flex';
    document.getElementById('countryName').innerText = country;
    document.getElementById('countryPhotos').innerHTML = `
      <img src="pictures/${initialD}1.jpg" alt="${country}">
      <img src="pictures/${initialD}2.jpg" alt="${country}">
      <img src="pictures/${initialD}3.jpg" alt="${country}">
      <img src="pictures/${initialD}4.jpg" alt="${country}">
      <img src="pictures/${initialD}5.jpg" alt="${country}">
    `;
  }
  
  function closeModal() {
    document.getElementById('countryModal').style.display = 'none';
  }
  
  function countrySearch(country) {
    if (country.length === 0) {
      return true;
    }else{
      country = country.toLowerCase();
      selectedCountries = [];
      countries.forEach(element => {
        if (element[0].toLowerCase().includes(country)) {
          selectedCountries.push(element[0]);
        }
      });
    }
  }

  function goToCountry(country) {
    block.innerHTML = '';
    if (countrySearch(country)){
      countries.forEach(element => {
        block.innerHTML += '<div class="country-card" onclick="openModal(\''+element[0]+'\', \''+element[1]+'\')"><img src="pictures/'+element[1]+'.png" alt="'+element[0]+'" class="country-image"><h3 class="country-name">'+element[0]+'</h3></div>';
      });
      return false;
    }
    countrySearch(country);
    for (let i = 0; i < selectedCountries.length; i++) {
      countries.forEach(element => {
        if (element[0].includes(selectedCountries[i])) {
          block.innerHTML += '<div class="country-card" onclick="openModal(\''+element[0]+'\', \''+element[1]+'\')"><img src="pictures/'+element[1]+'.png" alt="'+element[0]+'" class="country-image"><h3 class="country-name">'+element[0]+'</h3></div>';
      }
    });
  }}
