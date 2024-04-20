function movies(arr){
    let movieArr = [];
    for ( let movie of arr){
      if ( movie.includes('addMovie')){
        let infoMovie = movie.split('addMovie ');
        let movieName = infoMovie[1];
        let movieObj = { name: movieName};
        movieArr.push(movieObj);
      }else if ( movie.includes('directedBy')){
        let director = movie.split(' directedBy ');
        let movieName = director[0];
        let movieDirector = director[1]
        let movieFound = movieArr.find(m => m.name === movieName);
        if ( movieFound){
            movieFound.director = movieDirector;
        } 
      }else if ( movie.includes('onDate')){
        let date = movie.split('onDate ');
        let movieName = date[0];
        let movieDate = date[1];
        let movieFound = movieArr.find(m => m.name === movieName);
        if( movieFound){
            movieFound.date = movieDate;
        }
      }
      
       
    }
    let filterMovie = movieArr.filter(m => m.name && m.date && m.director);
    for ( let fullInfoMovie of filterMovie){
        console.log(JSON.stringify(fullInfoMovie));
    }

}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )