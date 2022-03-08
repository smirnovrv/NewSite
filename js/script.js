const numberOfFilms = +prompt('Сколько фильмо Вы уже смотрели','');

const PersonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes:[],
    privat: false
};

for (let i = 0; i <2 ; i++) {
    const a = prompt('Один из последних просмотренных фильмов?'),
          b = prompt('На сколько оцените его?', '');

        if (a !=null && b !=null && a != '' && b != '' && a.length<50){
            PersonalMovieDB.movies[a] = b;
            console.log('done'); 
        } else {
            console.log('error');
            i--;
        }

                
}

console.log(PersonalMovieDB);