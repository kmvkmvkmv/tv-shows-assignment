export const getGenreWiseShows = (showList) => {
    let genreWiseShows = {};
    showList.forEach(element => {
        element.genres.forEach(genre => {
            if (genre in genreWiseShows) {
                // if we already have genre in array we just add element
                genreWiseShows[genre].push(element)
            } else {
                // else we create new array with key as the genre name
                genreWiseShows[genre] = [element]
            }
        });
    });

    // removing all the genre that has less than 5 elements
    Object.keys(genreWiseShows).forEach(key => {
        if (genreWiseShows[key].length < 5)
            delete genreWiseShows[key];
    });
    return genreWiseShows;
}