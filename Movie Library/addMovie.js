//function call on form submit to add new movie to array in localStorage 
document.getElementById('addMovieForm').addEventListener('submit', (event) => {
    event.preventDefault();

    //retreive values from inputs
    const title = document.getElementById('title').value;
    const rating = document.getElementById('rating').value;
    const genre = document.getElementById('genre').value;
    const imageUrl = document.getElementById('imageUrl').value;

    //input validation
    if (!title || !genre || !imageUrl) {
        alert('Please fill in all fields.');
        return;
    }

    if (isNaN(rating) || rating<1 || rating >10){
        alert('Please enter a valid rating between 1 and 10.');
        return;
    }

    //push added movie data to array in localStorage
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.push({ title, rating, genre, imageUrl });
    localStorage.setItem('movies', JSON.stringify(movies));

    //reset form and redirect
    document.getElementById('addMovieForm').reset();
    window.location.href = "/index.html";
});



  
