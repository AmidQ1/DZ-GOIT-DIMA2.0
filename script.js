document.getElementById('get-movies').addEventListener('click', getMovies);
document.getElementById('add-movie-form').addEventListener('submit', addMovie);

const apiUrl = '/movies'; // Адреса для API

// Функція для отримання всіх фільмів (HTTP GET)
async function getMovies() {
    try {
        const response = await fetch(apiUrl);
        const movies = await response.json();
        renderMovies(movies);
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

// Функція для відображення фільмів у таблиці
function renderMovies(movies) {
    const tableBody = document.getElementById('movies-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Очистити таблицю

    movies.forEach(movie => {
        const row = tableBody.insertRow();

        row.innerHTML = `
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td>${movie.director}</td>
            <td>${movie.year}</td>
            <td>
                <button onclick="updateMovie(${movie.id})">Оновити</button>
                <button onclick="editMovie(${movie.id})">Редагувати</button>
                <button onclick="deleteMovie(${movie.id})">Видалити</button>
            </td>
        `;
    });
}

// Функція для додавання нового фільму (HTTP POST)
async function addMovie(event) {
    event.preventDefault();

    const newMovie = {
        title: document.getElementById('title').value,
        genre: document.getElementById('genre').value,
        director: document.getElementById('director').value,
        year: document.getElementById('year').value
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMovie)
        });
        const addedMovie = await response.json();
        alert('Фільм додано!');
        getMovies(); // Оновити список фільмів
    } catch (error) {
        console.error('Error adding movie:', error);
    }
}

// Функція для оновлення інформації про фільм (HTTP PUT)
async function updateMovie(id) {
    const updatedMovie = {
        title: prompt('Введіть нову назву фільму:'),
        genre: prompt('Введіть новий жанр:'),
        director: prompt('Введіть нового режисера:'),
        year: prompt('Введіть новий рік:')
    };

    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedMovie)
        });
        const result = await response.json();
        alert('Інформацію про фільм оновлено!');
        getMovies();
    } catch (error) {
        console.error('Error updating movie:', error);
    }
}

// Функція для редагування інформації про фільм (HTTP PATCH)
async function editMovie(id) {
    const editedMovie = {
        title: prompt('Введіть нову назву фільму (залиште порожнім, якщо не змінюється):'),
        genre: prompt('Введіть новий жанр (залиште порожнім, якщо не змінюється):'),
        director: prompt('Введіть нового режисера (залиште порожнім, якщо не змінюється):'),
        year: prompt('Введіть новий рік (залиште порожнім, якщо не змінюється):')
    };

    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedMovie)
        });
        const result = await response.json();
        alert('Частково оновлено інформацію про фільм!');
        getMovies();
    } catch (error) {
        console.error('Error editing movie:', error);
    }
}

// Функція для видалення фільму (HTTP DELETE)
async function deleteMovie(id) {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        });
        const result = await response.json();
        alert('Фільм видалено!');
        getMovies();
    } catch (error) {
        console.error('Error deleting movie:', error);
    }
}
