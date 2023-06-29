    // "use strict";

    const nomberOfFilms = +prompt(`сколько фильмов вы уже просмотрели?`, ``);

    const personalMoveDB = {
        count: nomberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };
    const a = prompt(`Один из последних просмотренных фильмов?`, ``),
          b = prompt(`На сколько оцените его?`, ``),
          c = prompt(`Один из последних просмотренных фильмов?`, ``),
          d = prompt(`На сколько оцените его?`, ``);

    personalMoveDB.movies[a] = b;
    personalMoveDB.movies[c] = d;
    
    console.log(personalMoveDB);
    