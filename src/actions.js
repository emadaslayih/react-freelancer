import freelancer from "./api/freelancer";
import {FETCH_CAROUSEL , 
        FETCH_AS_USED_BY, 
        FETCH_WORK_DONE, 
        FETCH_FEATURES,
        FETCH_CROWD_FAV,
        FETCH_CATEGORIES,
        FETCH_CARDS,
        FETCH_TOP_JOB } from "./types"


export const fetchCarousel = () => async dispatch => {
  const response = await freelancer.get('/carousel');
  dispatch({ type: FETCH_CAROUSEL, payload: response.data });
};

export const fetchAsUsedBy = () => async dispatch => {
  const response = await freelancer.get('/asUsedBy');
  dispatch({ type: FETCH_AS_USED_BY, payload: response.data });
};

export const fetchWorkDone=()=>async dispatch =>{
  const response =await freelancer.get("/workDone");
  dispatch({type:FETCH_WORK_DONE ,payload:response.data});
};

export const fetchFeatures =()=>async dispatch =>{
  const response=await freelancer.get("./features");
  dispatch({type:FETCH_FEATURES ,payload:response.data})
}

export const fetchCrowdFav =()=>async dispatch =>{
  const response=await freelancer.get("./favorite");
  dispatch({type:FETCH_CROWD_FAV ,payload:response.data})
}

export const fetchCategories =()=>async dispatch =>{
  const response=await freelancer.get("./categories");
  dispatch({type:FETCH_CATEGORIES ,payload:response.data})
}

export const fetchCards =()=>async dispatch =>{
  const response=await freelancer.get("./cards");
  dispatch({type:FETCH_CARDS ,payload:response.data})
}

export const fetchTopJob =()=>async dispatch =>{
  const response=await freelancer.get("./jobCategories");
  dispatch({type:FETCH_TOP_JOB ,payload:response.data})
}