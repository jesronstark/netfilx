
document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeButton = document.getElementById("toggleTheme");
    
    if (toggleThemeButton) {
        toggleThemeButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
        });
    }

    // Simulate fetching trending movies
    const movies = ["Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5"];
    const movieGrid = document.querySelector(".movie-grid");
    
    if (movieGrid) {
        movies.forEach(movie => {
            const movieElement = document.createElement("div");
            movieElement.classList.add("movie");
            movieElement.textContent = movie;
            movieGrid.appendChild(movieElement);
        });
    }
});
