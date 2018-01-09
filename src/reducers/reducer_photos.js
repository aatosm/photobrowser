import { FETCH_PHOTOS } from '../actions/index';

export default function(state = [], action){
  switch (action.type) {
    case FETCH_PHOTOS:
      console.log(action.payload.data);
      return action.payload.data;

  }
  return state;
}
