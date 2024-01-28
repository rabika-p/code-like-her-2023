// Display movies from localStorage on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const movies = JSON.parse(localStorage.getItem("movies")) || [];

  const movieGridContainer = document.getElementById("movieGrid");
  const messageContainer = document.getElementById("messageContainer");
  const addMovieButton = document.getElementById("addMovie");

  // Empty array check
  if (movies.length === 0) {
    messageContainer.textContent = "No movies in your library. Add some!";
  }

  // Html elements to display movie data
  const generateMovieHTML = (movie) => {
    return `
    <img src="images/${movie.imageUrl}" alt="${movie.title}" onerror="this.src='images/default.png';">
    <div class = "movieDetails">
          <h3 class="title">${movie.title}</h3>
          <p class = "genre">${movie.genre}</p>
          <p class = "rating">Rating: ${movie.rating}/10</p>
        </div>
        <div class = "buttonContainer">
          <button class="editMovie" onclick="editMovie('${movie.index}')">Edit</button>
          <button class="deleteMovie" onclick="deleteMovie('${movie.index}')">Delete</button>
        </div>
      `;
  };

  // Append HTML elements for each movie, wrap them in divs
  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = generateMovieHTML(movie);
    movieGridContainer.appendChild(movieElement);
  });

  // Redirect on add button click
  addMovieButton.addEventListener("click", () => {
    window.location.href = "add-movie.html";
  });
});

// Remove movie from localStorage array on delete button press
const deleteMovie = (index) => {
  let movies = JSON.parse(localStorage.getItem("movies")) || [];

  const movieIndex = movies.findIndex((movie) => movie.index === +index);

  // Remove movie if found
  if (movieIndex !== -1) {
    movies.splice(movieIndex, 1);
    localStorage.setItem("movies", JSON.stringify(movies));
    location.reload();
  }
};

const editMovie = (index) => {
  // Redirect with movieId parameter in url
  window.location.href = `add-movie.html?movieId=${index}`;
};
