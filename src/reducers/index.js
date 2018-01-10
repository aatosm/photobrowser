import { combineReducers } from 'redux';
import PhotosReducer from './reducer_photos';
import PhotoReducer from './reducer_photo';
import AlbumsReducer from './reducer_albums'

const rootReducer = combineReducers({
  photos: PhotosReducer,
  photo: PhotoReducer,
  albums: AlbumsReducer
});

export default rootReducer;
