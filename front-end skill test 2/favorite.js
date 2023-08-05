const favoritesList = document.getElementById('favoritesList');// variable store the element of favourtie container
const favoritesData = localStorage.getItem('favorites');// get the favourites movies data from local storage
if (favoritesData) { // check data found or not
    try {
        favorites = JSON.parse(favoritesData);
    } catch (error) {
        console.log('Error parsing favorites data:', error);
    }
}

// update favourite function is to update the local storage when we remove any movies from favourites
// and then display updated favourites movies
function updateFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites();
}
// this function is used to display all the favourites movies by using card dynamically
function displayFavorites() {
    favoritesList.innerHTML = '';
    console.log()
    if (favorites.length === 0) {// favourite has no movie then below text will visible.
        favoritesList.innerHTML = '<p>No movies found.</p>';
        return;
    }
    favorites.forEach(movie => {// loop on favorites array
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
        <img src="${movie.Poster}" alt="${movie.Title}">
      <h3>${movie.Title}</h3>
      <button class="remove-btn">Remove from Favorites</button>
      <button class="movie-link">More info</button>
    `;
        favoritesList.appendChild(movieCard);
        const movielink = movieCard.querySelector('.movie-link');
        const removeBtn = movieCard.querySelector('.remove-btn');
        removeBtn.addEventListener('click', () => removeFavorite(movie.imdbID));// this handle is used to remove movies from favorite list
        movielink.addEventListener('click', function (e) {
            // this event handler call when we click on any image which are present on favourite container 
            e.preventDefault();
            localStorage.setItem("searchmoive", JSON.stringify(movie));
            console.log("movie-select", movie);
            const currentURL = window.location.host;
            window.location.href = '/movie.html';
        })
    });
}

function removeFavorite(imdbID) {// this function to remove the movie when we click any remove from favourite on any movies
    favorites = favorites.filter(movie => movie.imdbID != imdbID);
    updateFavorites();
}
displayFavorites();