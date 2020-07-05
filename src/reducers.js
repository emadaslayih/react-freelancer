import {combineReducers} from "redux";
import {FETCH_CAROUSEL} from "./types";

const initialSTATE =
{
    carousel:[]
};

const fetchReducer = (state=initialSTATE,action)=> {
    switch(action.type){
      case FETCH_CAROUSEL:
          return {...state,carousel:action.payload ||[]};
          console.log(carousel);

    
    default:
        return  state;
    }
}

const rootReducer=combineReducers({
    fetchReducer:fetchReducer
});


export default rootReducer;





