const input = document.querySelector("#search-input");
const list = document.querySelector("#country-list");
const info = document.querySelector("#country-info");
const API_URL = "https://restcountries.com/v2/name";

function clearMarkup() {
  list.innerHTML = "";
  info.innerHTML = "";
}

function renderList(countries) {
  const markup = countries
    .map((country) => `<li>${country.name}</li>`)
    .join("");
  list.innerHTML = markup;
}

function renderInfo(country) {
  const { name, capital, population, languages, flag } = country;
  const lang = languages.map((lang) => lang.name).join(", ");

  info.innerHTML = `
    <img src="${flag}" alt="Flag of ${name}" width="100" />
    <p><strong>Country:</strong> ${name}</p>
    <p><strong>Capital:</strong> ${capital}</p>
    <p><strong>Population:</strong> ${population}</p>
    <p><strong>Languages:</strong> ${lang}</p>
  `;
}

function handleInput(event) {
  const search = event.target.value.trim();
  if (!search) {
    clearMarkup();
    return;
  }

  fetch(`${API_URL}/${search}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Країни нема");
      }
      return response.json();
    })
    .then((countries) => {
      clearMarkup();

      if (countries.length > 10) {
        PNotify.alert(
          "Знайдено забагато збігів. Будь ласка, введіть більш конкретний запит"
        );
      } else if (countries.length > 1) {
        renderList(countries);
      } else {
        renderInfo(countries[0]);
      }
    })
    .catch(() => {
      clearMarkup();
      PNotify.error("Країни не знайдено. Введіть дійсний запит");
    });
}

const debounc = _.debounce(handleInput, 500);
input.addEventListener("input", debounc);
