document.addEventListener('DOMContentLoaded', function () {
    const movie = JSON.parse(localStorage.getItem('searchmoive'));
    console.log(movie);
    const moveImage = document.getElementById('movieImage');
    const movieTitle = document.querySelector('.movieTitle');
    const basicDetail = document.querySelector('.basicDetail');
    const description = document.querySelector('.description');
    let desc;
    //console.log(movie.Title);
    moveImage.setAttribute('src', `${movie.Poster}`);
    moveImage.setAttribute('alt', `${movie.Title}`);
    movieTitle.innerHTML = `<u>${movie.Title}</u>`;
    basicDetail.innerHTML = `<span>Type: <b>${movie.Type}</b></span><span>Year: <b>${movie.Year}</b></span>`;
    description.innerHTML = `<b>Description:</b> ${desc}`;
    document.title = `${movie.Title}`;
});