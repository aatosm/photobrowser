import { FETCH_PHOTO } from '../actions/index';

export default function(state = [], action){
  switch (action.type) {
    case FETCH_PHOTO:
      return action.payload.data;
  }
  return state;
}
