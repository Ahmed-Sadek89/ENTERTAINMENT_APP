const key = '299dc8833d0986123eff433bc007e6f4';

export const fetchTrending = async (page) =>{
    const res = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${key}&page=${page}`);
    return res.json();
}

export const fetchMovies = async (page,genresURL) =>{
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresURL}`);
    return res.json();
}

export const fetchTVSeries = async (page,genresURL) =>{
    const res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresURL}`);
    return res.json();
}

// export const fetchGennres = async (type) =>{
//     const res = await fetch(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${key}&language=en-US`);
//     return res.json();
// }

export const fetchSearch = async (type, searchText = '', page) =>{
    const res = await fetch(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${key}&language=en-US&query=${searchText}&page=${page}&include_adult=false`);
    return res.json();
}

export const fetchContentInfo = async (type,id) =>{
    const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${key}&language=en-US`);
    return res.json();
}

export const fetchContentCasts = async (type,id) =>{
    const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${key}&language=en-US`);
    return res.json();
}

export const fetchContentTrailer = async (type,id) =>{
    const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${key}&language=en-US`);
    return res.json();
}