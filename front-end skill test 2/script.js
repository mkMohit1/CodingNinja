const apiKey = '2b0138a3';// i have generate by verifying the email on side omdbapi.com
const searchInput = document.getElementById('searchInput'); // search input container get the id of element by getElementById
const searchResults = document.getElementById('searchResults');// this varible is used for input bar
let favorites = [];// it store the data of movies of those which added on click add favourite button
const favoritesData = localStorage.getItem('favorites');// get the data initial from favorites key from local storage.
if (favoritesData) {// check something inside the favoritesData
    try {
        favorites = JSON.parse(favoritesData);
    } catch (error) {
        console.log('Error parsing favorites data:', error);
    }
}
if (searchInput.value.trim() == '') {// if the search bar or input tag is empty then display nothing
    document.getElementById('searchhead').style.display = 'none';
}

// fetch movies function is used to fetch data when we type something inside the search bar and then
// it calls the displayMovies function which is mainly create movie card dynamicaly on data provided
function fetchMovies(searchItems) {
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchItems}`)
        .then(response => response.json())
        .then(data => displayMovies(data.Search));
}
// add to Favourites function is used when we click the add to favourite btn which is available on each movie card
function addToFavourites(movie) {
    //  first it check if movie is present in favorites array. if not then it add to it and call update 
    // favourite function to update the local storage data
    if (!favorites.some(favorite => favorite.imdbID == movie.imdbID)) {
        favorites.push(movie);
        updateFavorites();
    }
}
// updated favourites function will update the local storage key "favorites" value when we add new
//movies when we click on add to favourite button. 
function updateFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));

}
//display movies is used to the movies in card 
// if the movies is empty the show one message that "no movies found"
function displayMovies(movies) {
    //console.log(movies);
    searchResults.innerHTML = '';// set default empty
    document.getElementById('searchhead').style.display = '';
    if (!movies) {// if movies is empty
        searchResults.innerHTML = '<p>No movies found.</p>';
        return;
    }
    localStorage.setItem('searchmoive', '');// set searchmovie empty at initially
    movies.forEach(movie => {
        const movieCard = document.createElement('div');// dynamically movie card create and data will be inserted
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `<img src="${movie.Poster}" alt=${movie.Title}>
            <h3>${movie.Title}</h3>
            <button class="favorite-btn">Add to Favorites</button>
            <button class="movie-link">More info</button>
        `;
        searchResults.appendChild(movieCard);// added movie card to search container where we show movies
        const movielink = movieCard.querySelector('.movie-link');
        const favoriteBtn = movieCard.querySelector('.favorite-btn');
        favoriteBtn.addEventListener('click', (event) => {
            // this event handler is used to add movie to array and the update at local storage 
            // when use click the add to favourite button then it will work
            addToFavourites(movie);
            //console.log(event.target);
            event.target.classList.add('addFav');
        });
        movielink.addEventListener('click', function (e) {
            // this event handler call when we click on any image which are present on search container 
            e.preventDefault();
            localStorage.setItem("searchmoive", JSON.stringify(movie));
            console.log("movie-select", movie);
            const currentURL = window.location.host;
            window.location.href = '/movie.html';
        })
    });
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

