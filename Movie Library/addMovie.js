let editIndex = new URLSearchParams(window.location.search).get("movieId");
let currentIndex = JSON.parse(localStorage.getItem("currentIndex")) || 0;

// Add new movie or update existing one on form submit
document.getElementById("addMovieForm").addEventListener("submit", (event) => {
  event.preventDefault();

  // Retrieve values from form fields
  const title = document.getElementById("title").value;
  const rating = document.getElementById("rating").value;
  const genre = document.getElementById("genre").value;
  const imageUrl = document.getElementById("imageUrl").value;

  // Input validation
  if (!title || !genre) {
    alert("Please fill in all fields.");
    return;
  }

  if (isNaN(rating) || rating < 1 || rating > 10) {
    alert("Please enter a valid rating between 1 and 10.");
    return;
  }

  let movies = JSON.parse(localStorage.getItem("movies")) || [];
  const movieIndex = movies.findIndex((movie) => movie.index === +editIndex);

  //Edit or add new movie to localStorage array
  if (movieIndex !== -1) {
    movies[movieIndex] = { index: +editIndex, title, rating, genre, imageUrl };
  } else {
    currentIndex++;
    movies.push({ index: currentIndex, title, rating, genre, imageUrl });
    localStorage.setItem("currentIndex", JSON.stringify(currentIndex));
  }

  // Save the updated movies array to localStorage
  localStorage.setItem("movies", JSON.stringify(movies));

  // Reset the form and redirect to index.html
  document.getElementById("addMovieForm").reset();
  window.location.href = "index.html";
});

// Fill form fields with existing values for editing movie details
const fillFormForEdit = () => {
  if (editIndex !== null) {
    const movies = JSON.parse(localStorage.getItem("movies")) || [];
    const movie = movies.find((movie) => movie.index === +editIndex);

    if (movie) {
      // Set the form fields with existing values from localStorage
      document.getElementById("title").value = movie.title;
      document.getElementById("rating").value = movie.rating;
      document.getElementById("genre").value = movie.genre;
      document.getElementById("imageUrl").value = movie.imageUrl;
    }
  }
};

fillFormForEdit();

// Display edit/add depending on if there is movieId as query param in URL or not
document.addEventListener("DOMContentLoaded", () => {
  const editIndex = new URLSearchParams(window.location.search).get("movieId");
  const formTitle = document.getElementById("formTitle");
  const submitBtn = document.getElementById("submitBtn");

  if (editIndex !== null) {
    // Editing an existing movie
    formTitle.textContent = "Edit Movie";
    submitBtn.textContent = "Update";
  } else {
    formTitle.textContent = "Add Movie";
    submitBtn.textContent = "Add";
  }
});