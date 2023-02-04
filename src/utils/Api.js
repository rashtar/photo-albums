/* API Call to retrieve a list of albums */
export function getAlbums() {
    return fetch("https://jsonplaceholder.typicode.com/users/1/albums")
        .then(res => res.json());
}

/* API Call to retrieve a list of album photos given an albumId */
export function getAlbumPhotos(albumId) {
    return fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
        .then(res => res.json());
}