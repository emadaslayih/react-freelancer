import {FETCH_CAROUSEL} from "./types";

export default function reducer (state = {carousel: []}, action) {
    switch(action.type){
      case FETCH_CAROUSEL:
          console.log(action.payload )
            return {...state, carousel: action.payload };
        default:
            return state;
    }
}
