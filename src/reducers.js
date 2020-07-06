import {FETCH_CAROUSEL,
    FETCH_AS_USED_BY,
     FETCH_WORK_DONE,
     FETCH_FEATURES,
     FETCH_CROWD_FAV,
     FETCH_CATEGORIES,
     FETCH_CARDS,
     FETCH_TOP_JOB } from "./types";

const initialState={
carousel:[],
usedBy:[],
workDone:[],
features:[],
favourite:[],
categories:[],
cards:[],
topJob:[]
};

export default function reducer (state = initialState, action) {
    switch(action.type){
      case FETCH_CAROUSEL:
            return {...state, carousel: action.payload  };
        case FETCH_AS_USED_BY:
            return {...state, usedBy:action.payload };
        case FETCH_WORK_DONE:
            return {...state, workDone:action.payload };
        case FETCH_FEATURES :
            return {...state,features:action.payload};
        case FETCH_CROWD_FAV :
            return {...state,favourite:action.payload};
        case FETCH_CATEGORIES :
            return {...state,categories:action.payload};
        case FETCH_CARDS :
            return {...state,cards:action.payload};
        case FETCH_TOP_JOB :
            return {...state,topJob:action.payload};
        default:
            return state;
    }
}
