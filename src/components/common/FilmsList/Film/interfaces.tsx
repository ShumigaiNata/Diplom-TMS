export interface IFilm {
    Title: string,
    Year: string,
    Rated:string,
    Released:string,
    Runtime:string,
    Genre:string,
    Director:string,
    Writer:string,
    Actors:string,
    Plot:string,
    Language:string,
    Country:string,
    Awards:string,
    Poster:string,
    Ratings:IRating[],
    Metascore: string,
    imdbRating:string,
    imdbVotes:string,
    imdbID:string,
    Type: string,
    DVD:string,
    BoxOffice:string,
    Production:string,
    Website:string,
    Response:string,
}

interface IRating {
    Source:string,
    Value:string
}
type TypeOfFilm = "movie" | "series" | "episode"

export const config = [{
    Title:"Batman",
    Year:"1989",
    Rated:"PG-13",
    Released:"23 Jun 1989",
    Runtime:"126 min",
    Genre:"Action, Adventure",
    Director:"Tim Burton",
    Writer:"Bob Kane, Sam Hamm, Warren Skaaren",
    Actors:"Michael Keaton, Jack Nicholson, Kim Basinger",
    Plot:"The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
    Language:"English, French, Spanish",
    Country:"United States, United Kingdom",
    Awards:"Won 1 Oscar. 10 wins & 26 nominations total",
    Poster:"https://m.media-amazon.com/images/M/MV5BZjUyZWE5YmMtNDA2ZC00NzFlLTg0MzktOTgzYjA2ZWE3NmIwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    Ratings:[{Source:"Internet Movie Database",Value:"7.5/10"},
   ],
    Metascore:"69",
    imdbRating:"7.5",
    imdbVotes:"377,345",
    imdbID:"tvt0096895",
    Type:"movie",
    DVD:"22 Aug 1997",
    BoxOffice:"$251,409,241",
    Production:"N/A",
    Website:"N/A",
    Response:"True"
}, {
    Title:"Batman",
    Year:"1989",
    Rated:"PG-13",
    Released:"23 Jun 1989",
    Runtime:"126 min",
    Genre:"Action, Adventure",
    Director:"Tim Burton",
    Writer:"Bob Kane, Sam Hamm, Warren Skaaren",
    Actors:"Michael Keaton, Jack Nicholson, Kim Basinger",
    Plot:"The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
    Language:"English, French, Spanish",
    Country:"United States, United Kingdom",
    Awards:"Won 1 Oscar. 10 wins & 26 nominations total",
    Poster:"https://m.media-amazon.com/images/M/MV5BZDNjOGNhN2UtNmNhMC00YjU4LWEzMmUtNzRkM2RjN2RiMjc5XkEyXkFqcGdeQXVyMTU0OTM5ODc1._V1_SX300.jpg",
    Ratings:[{Source:"Internet Movie Database",Value:"7.5/10"},
    ],
    Metascore:"69",
    imdbRating:"7.5",
    imdbVotes:"377,345",
    imdbID:"ttv0096895",
    Type:"movie",
    DVD:"22 Aug 1997",
    BoxOffice:"$251,409,241",
    Production:"N/A",
    Website:"N/A",
    Response:"True"
},  {
    Title:"Batman",
    Year:"1989",
    Rated:"PG-13",
    Released:"23 Jun 1989",
    Runtime:"126 min",
    Genre:"Action, Adventure",
    Director:"Tim Burton",
    Writer:"Bob Kane, Sam Hamm, Warren Skaaren",
    Actors:"Michael Keaton, Jack Nicholson, Kim Basinger",
    Plot:"The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
    Language:"English, French, Spanish",
    Country:"United States, United Kingdom",
    Awards:"Won 1 Oscar. 10 wins & 26 nominations total",
    Poster:"https://m.media-amazon.com/images/M/MV5BZDNjOGNhN2UtNmNhMC00YjU4LWEzMmUtNzRkM2RjN2RiMjc5XkEyXkFqcGdeQXVyMTU0OTM5ODc1._V1_SX300.jpg",
    Ratings:[{Source:"Internet Movie Database",Value:"7.5/10"},
    ],
    Metascore:"69",
    imdbRating:"7.5",
    imdbVotes:"377,345",
    imdbID:"tt009v6895",
    Type:"movie",
    DVD:"22 Aug 1997",
    BoxOffice:"$251,409,241",
    Production:"N/A",
    Website:"N/A",
    Response:"True"
},  {
    Title:"Batman",
    Year:"1989",
    Rated:"PG-13",
    Released:"23 Jun 1989",
    Runtime:"126 min",
    Genre:"Action, Adventure",
    Director:"Tim Burton",
    Writer:"Bob Kane, Sam Hamm, Warren Skaaren",
    Actors:"Michael Keaton, Jack Nicholson, Kim Basinger",
    Plot:"The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
    Language:"English, French, Spanish",
    Country:"United States, United Kingdom",
    Awards:"Won 1 Oscar. 10 wins & 26 nominations total",
    Poster:"https://m.media-amazon.com/images/M/MV5BZDNjOGNhN2UtNmNhMC00YjU4LWEzMmUtNzRkM2RjN2RiMjc5XkEyXkFqcGdeQXVyMTU0OTM5ODc1._V1_SX300.jpg",
    Ratings:[{Source:"Internet Movie Database",Value:"7.5/10"},
    ],
    Metascore:"69",
    imdbRating:"7.5",
    imdbVotes:"377,345",
    imdbID:"tt0096895sssss",
    Type:"movie",
    DVD:"22 Aug 1997",
    BoxOffice:"$251,409,241",
    Production:"N/A",
    Website:"N/A",
    Response:"True"
}, {
    Title:"Batman",
    Year:"1989",
    Rated:"PG-13",
    Released:"23 Jun 1989",
    Runtime:"126 min",
    Genre:"Action, Adventure",
    Director:"Tim Burton",
    Writer:"Bob Kane, Sam Hamm, Warren Skaaren",
    Actors:"Michael Keaton, Jack Nicholson, Kim Basinger",
    Plot:"The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
    Language:"English, French, Spanish",
    Country:"United States, United Kingdom",
    Awards:"Won 1 Oscar. 10 wins & 26 nominations total",
    Poster:"https://m.media-amazon.com/images/M/MV5BZDNjOGNhN2UtNmNhMC00YjU4LWEzMmUtNzRkM2RjN2RiMjc5XkEyXkFqcGdeQXVyMTU0OTM5ODc1._V1_SX300.jpg",
    Ratings:[{Source:"Internet Movie Database",Value:"7.5/10"},
    ],
    Metascore:"69",
    imdbRating:"7.5",
    imdbVotes:"377,345",
    imdbID:"tst0096895",
    Type:"movie",
    DVD:"22 Aug 1997",
    BoxOffice:"$251,409,241",
    Production:"N/A",
    Website:"N/A",
    Response:"True"
}, {
    Title:"Batman",
    Year:"1989",
    Rated:"PG-13",
    Released:"23 Jun 1989",
    Runtime:"126 min",
    Genre:"Action, Adventure",
    Director:"Tim Burton",
    Writer:"Bob Kane, Sam Hamm, Warren Skaaren",
    Actors:"Michael Keaton, Jack Nicholson, Kim Basinger",
    Plot:"The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
    Language:"English, French, Spanish",
    Country:"United States, United Kingdom",
    Awards:"Won 1 Oscar. 10 wins & 26 nominations total",
    Poster:"https://m.media-amazon.com/images/M/MV5BZDNjOGNhN2UtNmNhMC00YjU4LWEzMmUtNzRkM2RjN2RiMjc5XkEyXkFqcGdeQXVyMTU0OTM5ODc1._V1_SX300.jpg",
    Ratings:[{Source:"Internet Movie Database",Value:"7.5/10"},
    ],
    Metascore:"69",
    imdbRating:"7.5",
    imdbVotes:"377,345",
    imdbID:"tt009sssssssssssssss6895",
    Type:"movie",
    DVD:"22 Aug 1997",
    BoxOffice:"$251,409,241",
    Production:"N/A",
    Website:"N/A",
    Response:"True"
}, {
    Title:"Batman",
    Year:"1989",
    Rated:"PG-13",
    Released:"23 Jun 1989",
    Runtime:"126 min",
    Genre:"Action, Adventure",
    Director:"Tim Burton",
    Writer:"Bob Kane, Sam Hamm, Warren Skaaren",
    Actors:"Michael Keaton, Jack Nicholson, Kim Basinger",
    Plot:"The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
    Language:"English, French, Spanish",
    Country:"United States, United Kingdom",
    Awards:"Won 1 Oscar. 10 wins & 26 nominations total",
    Poster:"https://m.media-amazon.com/images/M/MV5BZDNjOGNhN2UtNmNhMC00YjU4LWEzMmUtNzRkM2RjN2RiMjc5XkEyXkFqcGdeQXVyMTU0OTM5ODc1._V1_SX300.jpg",
    Ratings:[{Source:"Internet Movie Database",Value:"7.5/10"},
    ],
    Metascore:"69",
    imdbRating:"7.5",
    imdbVotes:"377,345",
    imdbID:"tt009sssss6895",
    Type:"movie",
    DVD:"22 Aug 1997",
    BoxOffice:"$251,409,241",
    Production:"N/A",
    Website:"N/A",
    Response:"True"
}, {
    Title:"Batman",
    Year:"1989",
    Rated:"PG-13",
    Released:"23 Jun 1989",
    Runtime:"126 min",
    Genre:"Action, Adventure",
    Director:"Tim Burton",
    Writer:"Bob Kane, Sam Hamm, Warren Skaaren",
    Actors:"Michael Keaton, Jack Nicholson, Kim Basinger",
    Plot:"The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
    Language:"English, French, Spanish",
    Country:"United States, United Kingdom",
    Awards:"Won 1 Oscar. 10 wins & 26 nominations total",
    Poster:"https://m.media-amazon.com/images/M/MV5BZDNjOGNhN2UtNmNhMC00YjU4LWEzMmUtNzRkM2RjN2RiMjc5XkEyXkFqcGdeQXVyMTU0OTM5ODc1._V1_SX300.jpg",
    Ratings:[{Source:"Internet Movie Database",Value:"7.5/10"},
    ],
    Metascore:"69",
    imdbRating:"7.5",
    imdbVotes:"377,345",
    imdbID:"tt00968ss95",
    Type:"movie",
    DVD:"22 Aug 1997",
    BoxOffice:"$251,409,241",
    Production:"N/A",
    Website:"N/A",
    Response:"True"
}, {
    Title:"Batman",
    Year:"1989",
    Rated:"PG-13",
    Released:"23 Jun 1989",
    Runtime:"126 min",
    Genre:"Action, Adventure",
    Director:"Tim Burton",
    Writer:"Bob Kane, Sam Hamm, Warren Skaaren",
    Actors:"Michael Keaton, Jack Nicholson, Kim Basinger",
    Plot:"The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
    Language:"English, French, Spanish",
    Country:"United States, United Kingdom",
    Awards:"Won 1 Oscar. 10 wins & 26 nominations total",
    Poster:"https://m.media-amazon.com/images/M/MV5BZDNjOGNhN2UtNmNhMC00YjU4LWEzMmUtNzRkM2RjN2RiMjc5XkEyXkFqcGdeQXVyMTU0OTM5ODc1._V1_SX300.jpg",
    Ratings:[{Source:"Internet Movie Database",Value:"7.5/10"},
    ],
    Metascore:"69",
    imdbRating:"7.5",
    imdbVotes:"377,345",
    imdbID:"tt0096s895",
    Type:"movie",
    DVD:"22 Aug 1997",
    BoxOffice:"$251,409,241",
    Production:"N/A",
    Website:"N/A",
    Response:"True"
}, {
    Title:"Batman",
    Year:"1989",
    Rated:"PG-13",
    Released:"23 Jun 1989",
    Runtime:"126 min",
    Genre:"Action, Adventure",
    Director:"Tim Burton",
    Writer:"Bob Kane, Sam Hamm, Warren Skaaren",
    Actors:"Michael Keaton, Jack Nicholson, Kim Basinger",
    Plot:"The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
    Language:"English, French, Spanish",
    Country:"United States, United Kingdom",
    Awards:"Won 1 Oscar. 10 wins & 26 nominations total",
    Poster:"https://m.media-amazon.com/images/M/MV5BZDNjOGNhN2UtNmNhMC00YjU4LWEzMmUtNzRkM2RjN2RiMjc5XkEyXkFqcGdeQXVyMTU0OTM5ODc1._V1_SX300.jpg",
    Ratings:[{Source:"Internet Movie Database",Value:"7.5/10"},
    ],
    Metascore:"69",
    imdbRating:"7.5",
    imdbVotes:"377,345",
    imdbID:"tt0096895s",
    Type:"movie",
    DVD:"22 Aug 1997",
    BoxOffice:"$251,409,241",
    Production:"N/A",
    Website:"N/A",
    Response:"True"
}, ]