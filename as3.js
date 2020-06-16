// number 1
let movies = [
    {movieTitle:"Fiat", releaseYear:2020, rating:9, genres:["Drama", "Mystery", "Sci-Fi", "Western"]},
    {movieTitle:"lambo", releaseYear:2020, rating:100, genres:["Drama", "Mystery", "Sci-Fi", "Western"]},
    {movieTitle:"Fiat", releaseYear:2020, rating:7, genres:["Drama", "Mystery", "Sci-Fi", "Western"]},
    {movieTitle:"Fiat", releaseYear:2020, rating:10, genres:["Drama", "Mystery", "Sci-Fi", "Western"]},
    {movieTitle:"Fiat", releaseYear:2020, rating:3, genres:["Drama", "Mystery", "Sci-Fi", "Western"]}
];

// console.log(movies);

// number 2
movies.forEach(movie => {
    movie.format = "film";
});

// console.log(movies);


// number 3
let sortByRating = movies.slice(0);
sortByRating.sort((a,b) => {
     return a.rating - b.rating;
});

// console.log(sortByRating);


// number 4
let useOfMap = movies.map(movie => {
return movie.movieTitle;
});

// console.log(useOfMap);


// number 5
let highestRated = movies.reduce((a, b) => {
    if(a.rating < b.rating){
        a = b;
    }
    return a;
});

let lowestRated = movies.reduce((a, b) => {
    if(a.rating > b.rating){
        a = b;
    }
    return a;
});

console.log(highestRated);
console.log(lowestRated);




// let highestRated, lowestRated;

    // let useOfReduce = movies.reduce((a, b) => {
    //     return a.rating < b.rating ? a.rating : b.rating;
    //     });
    // console.log(useOfReduce);



// HIGHEST_RATED = useOfReduce[0];
// LOWEST_RATED = useOfReduce[1];

// console.log(HIGHEST_RATED);
// console.log(LOWEST_RATED);