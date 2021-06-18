export const addMovieToList = (listMovies, listMovieToAdd) => {
    const existinglistMovie = listMovies.find(listMovie => listMovie.id === listMovieToAdd.id);
    
    if(!existinglistMovie) {
        return [...listMovies, {...listMovieToAdd}];
    }    
    
    return [...listMovies];
};

export const removeMovieFromList = (listMovies, listMovieToRemove) => {
    return listMovies.filter(
        listMovie => listMovie.id !== listMovieToRemove.id
    )
}

export const sortByTitle = listToSort => {
    return [...listToSort].sort((a, b) => a.title.localeCompare(b.title));
}

export const sortByPopularity = listToSort => {
    return [...listToSort].sort((a, b) => b.popularity - a.popularity);
}