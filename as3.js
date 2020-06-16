// number 1
let movies = [
    {movieTitle:"Fiat", releaseYear:2020, rating:9, genres:["Drama", "Mystery", "Sci-Fi", "Western"]},
    {movieTitle:"Fiat", releaseYear:2020, rating:6, genres:["Drama", "Mystery", "Sci-Fi", "Western"]},
    {movieTitle:"Fiat", releaseYear:2020, rating:7, genres:["Drama", "Mystery", "Sci-Fi", "Western"]},
    {movieTitle:"Fiat", releaseYear:2020, rating:8, genres:["Drama", "Mystery", "Sci-Fi", "Western"]},
    {movieTitle:"Fiat", releaseYear:2020, rating:10, genres:["Drama", "Mystery", "Sci-Fi", "Western"]}
];

// number 2
movies.forEach(movie => {
    movie.format = "film";
});

console.log(movies);


// number 3
let sortByRating = movies.slice(0);
sortByRating.sort((a,b) => {
     return a.rating - b.rating;
});


console.log(sortByRating);