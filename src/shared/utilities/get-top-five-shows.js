export const getTopFiveShows = (showList) => {
    let result = [];

    // sorting list based on rating
    showList.sort((a, b) => {
        if (a.rating.average && b.rating.average) {
            return b.rating.average - a.rating.average;
        }
        return 1;
    });

    // taking top 5 rated shows from the list
    for (let i = 0; i < 5; i++) {
        result.push(showList[i]);
    }

    return result;
};