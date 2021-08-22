export function ArtistName(name) {
    return fetch(`https://theaudiodb.com/api/v1/json/1/search.php?s=${name}`)
    .then(response => (
        response.ok 
        ? response.json()
        : Promise.reject(new Error('Api error!'))        
    ));
}

export function AlbunsArtist(name) {
    return fetch(`https://theaudiodb.com/api/v1/json/1/discography.php?s=${name}`)
    .then(response => (
        response.ok 
        ? response.json()
        : Promise.reject(new Error('Api error!'))        
    ));
}

export function VideosArtist(id) {
    return fetch(`https://theaudiodb.com/api/v1/json/1/mvid.php?i=${id}`)
    .then(response => (
        response.ok 
        ? response.json()
        : Promise.reject(new Error('Api error!'))        
    ));
}