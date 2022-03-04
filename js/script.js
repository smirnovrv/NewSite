const numberOfFilms = +prompt('Сколько фильмо Вы уже смотрели','');

const PersonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes:[],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?'),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

      PersonalMovieDB.movies[a] = b;   
      PersonalMovieDB.movies[c] = d; 