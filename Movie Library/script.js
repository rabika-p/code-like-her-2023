//display movies from localStorage on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const movies = JSON.parse(localStorage.getItem("movies")) || [];

  const movieGridContainer = document.getElementById("movieGrid");
  const messageContainer = document.getElementById("messageContainer");
  const addMovieButton = document.getElementById("addMovie");

  //empty array check
  if (movies.length === 0) {
    messageContainer.textContent = "No movies in your library. Add some!";
  }

  //html elements to display movie data
  const generateMovieHTML = (movie) => {
    return `
    <img src="images/${movie.imageUrl}" alt="${movie.title}" onerror="this.src='images/default.png';">
    <div class = "movieDetails">
          <h3 class="title">${movie.title}</h3>
          <p class = "genre">${movie.genre}</p>
          <p class = "rating">Rating: ${movie.rating}/10</p>
        </div>
        <button class="deleteMovie" onclick="deleteMovie('${movie.title}')">Delete</button>
      `;
  };

  //append HTML elements for each movie, wrap them in divs
  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = generateMovieHTML(movie);
    movieGridContainer.appendChild(movieElement);
  });

  //redirect on add button click
  addMovieButton.addEventListener("click", () => {
    window.location.href = "add-movie.html";
  });
});


