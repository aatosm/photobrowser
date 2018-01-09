import { combineReducers } from 'redux';
import PhotosReducer from './reducer_photos';
import AlbumsReducer from './reducer_albums'

const rootReducer = combineReducers({
  photos: PhotosReducer,
  albums: AlbumsReducer
});

export default rootReducer;
