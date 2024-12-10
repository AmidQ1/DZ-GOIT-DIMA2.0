const refs = {
    searchBox: document.getElementById('search-box'),
    countryInfo: document.getElementById('country-info'),
  };
  
  const DEBOUNCE_DELAY = 500;
  
  refs.searchBox.addEventListener(
    'input',
    _.debounce(onSearchInput, DEBOUNCE_DELAY)
  );
  
  function onSearchInput(e) {
    const query = e.target.value.trim();
  
    if (!query) {
      clearMarkup();
      return;
    }
  
    fetch(`https://restcountries.com/v2/name/${query}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(countries => {
        if (countries.length > 10) {
          clearMarkup();
          PNotify.notice({
            text: 'Too many matches found. Please enter a more specific query.',
          });
          return;
        }
  
        if (countries.length >= 2 && countries.length <= 10) {
          renderCountryList(countries);
        }
  
        if (countries.length === 1) {
          renderCountryDetails(countries[0]);
        }
      })
      .catch(err => {
        clearMarkup();
        PNotify.error({ text: 'Country not found!' });
      });
  }
  
  function renderCountryList(countries) {
    const markup = countries
      .map(country => `<li>${country.name}</li>`)
      .join('');
    refs.countryInfo.innerHTML = `<ul class="country-list">${markup}</ul>`;
  }
  
  function renderCountryDetails(country) {
    const { name, capital, population, languages, flag } = country;
    const languageList = languages.map(lang => lang.name).join(', ');
  
    refs.countryInfo.innerHTML = `
      <div>
        <h2>${name}</h2>
        <img src="${flag}" alt="${name} flag" width="100" />
        <p><strong>Capital:</strong> ${capital}</p>
        <p><strong>Population:</strong> ${population}</p>
        <p><strong>Languages:</strong> ${languageList}</p>
      </div>
    `;
  }
  
  function clearMarkup() {
    refs.countryInfo.innerHTML = '';
  }
  