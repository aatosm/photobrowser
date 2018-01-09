import { FETCH_ALBUMS } from '../actions/index';

export default function(state = [], action){
  switch (action.type) {
    case FETCH_ALBUMS:
      return action.payload.data;
  }
  return state;
}
