const apiKey = '2b0138a3';// i have generate
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const favoritesList = document.getElementById('favoritesList');
let favorites = [];
const favoritesData = localStorage.getItem('favorites');
if (searchInput.value.trim() == '') {
    document.getElementById('searchhead').style.display = 'none';
}
if (favoritesData) {
    try {
        favorites = JSON.parse(favoritesData);
    } catch (error) {
        console.log('Error parsing favorites data:', error);
    }
}
function fetchMovies(searchItems) {
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchItems}`)
        .then(response => response.json())
        .then(data => displayMovies(data.Search));
}

function displayMovies(movies) {
    console.log(movies);
    searchResults.innerHTML = '';
    document.getElementById('searchhead').style.display = '';
    if (!movies) {
        searchResults.innerHTML = '<p>No movies found.</p>';
        return;
    }
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `<img src="${movie.Poster}" alt=${movie.Title}>
            <h3>${movie.Title}</h3>
            <button class="favorite-btn">Add to Favorites</button>
        `;
        searchResults.appendChild(movieCard);
        const favoriteBtn = movieCard.querySelector('.favorite-btn');
        favoriteBtn.addEventListener('click', () => addToFavourites(movie));

    });
}

function addToFavourites(movie) {
    if (!favorites.some(favorite => favorite.imdbID == movie.imdbID)) {
        favorites.push(movie);
        updateFavorites();
    }
}

function updateFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites();
}

function displayFavorites() {
    favoritesList.innerHTML = '';
    console.log()
    if (favorites.length === 0) {
        document.getElementById('favhead').style.display = 'none';
    } else {
        document.getElementById('favhead').style.display = '';
    }
    favorites.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
      <img src="${movie.Poster}" alt="${movie.Title}">
      <h3>${movie.Title}</h3>
      <button class="remove-btn">Remove from Favorites</button>
    `;
        favoritesList.appendChild(movieCard);
        const removeBtn = movieCard.querySelector('.remove-btn');
        removeBtn.addEventListener('click', () => removeFavorite(movie.imdbID));
    });
}

function removeFavorite(imdbID) {
    favorites = favorites.filter(movie => movie.imdbID != imdbID);
    updateFavorites();
}
searchInput.addEventListener('input', () => {
    const searchItems = searchInput.value.trim();
    if (searchItems.length > 1) {
        fetchMovies(searchItems);
    } else {
        searchResults.innerHTML = '';
        document.getElementById('searchhead').style.display = 'none';
    }
});

displayFavorites();