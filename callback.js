const movies = [
    { title: "priyanka", body: "sharma" },
    { title: "leena", body: "tomar" }]

function getMovies() {
    setTimeout(() => {
        movies.forEach((movie, index) => {
            console.log(movie.title)
        })
    }, 1000);
}

getMovies();
