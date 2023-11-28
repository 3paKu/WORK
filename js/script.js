 'use strict';
 let numberOfFilms;

    function start() {

        numberOfFilms = +prompt(`сколько фильмов вы уже посмотрели?`, ``);
    
        while (numberOfFilms == `` || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt(`сколько фильмов вы уже посмотрели?`, ``);
        }
    }
    start();

    const personalMovieDB = {
    count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false
 };



    function rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            const a = prompt(`один из последних просмотренных фильмов?`, ``),
                  b = prompt(`на сколько оцените его?`, ``);    
        
            if (a != null && b != null && a != `` && b != `` && a.length < 50 && b.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log(`done`);
            } else {
                console.log(`error`);
                i--;
            }
        }
    }
    rememberMyFilms();

    function DetectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log(`просмотренно довольно мало фильмов`);
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log(`вы классический зритель`);
        } else if (personalMovieDB.count >= 30) {
            console.log(`вы киноман`);
        } else {
            console.log(`произошла ошибка`);
        }
    }
    DetectPersonalLevel();

    function ShowMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }

    ShowMyDB(personalMovieDB.privat);

    function writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt (`Ваш любимый жанр под номером ${i}`);
        }
    }
    writeYourGenres();