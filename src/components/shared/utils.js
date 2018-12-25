export const getTime = totalMinutes => {
    const hours = Math.floor(totalMinutes / 60);          
    const minutes = totalMinutes % 60;
    const time = `${hours}h ${minutes}m`;
    return time;
}

export const getYear = date => date.substring(0, 4);

export const getGenre = (genres, genresOptions) => {
    const firstGenre = genres[0];
    const { name } = genresOptions.find(genre => genre.id === firstGenre);
    return name;
};
