import axios from 'axios';

const PHOTOS_URL = 'http://jsonplaceholder.typicode.com/photos';

export const FETCH_PHOTOS = 'FETCH_PHOTOS';

export function fetchPhotos(){
  const request = axios.get(PHOTOS_URL);

  return {
    type: FETCH_PHOTOS,
    payload: request
  }
}
