import axios from 'axios';

const PHOTOS_URL = 'http://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'http://jsonplaceholder.typicode.com/albums';

export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const FETCH_PHOTO = 'FETCH_PHOTO';


export function fetchPhotos(id){
  const request = axios.get(PHOTOS_URL+'?albumId='+id);

  return {
    type: FETCH_PHOTOS,
    payload: request
  }
}


export function fetchAlbums(){
  const request = axios.get(ALBUMS_URL);

  return {
    type: FETCH_ALBUMS,
    payload: request
  }
}


export function fetchPhoto(id){
  const request = axios.get(PHOTOS_URL+'/'+id);

  return {
    type: FETCH_PHOTO,
    payload: request
  }
}
