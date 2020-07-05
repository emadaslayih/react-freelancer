import freelancer from "./api/freelancer";
import {FETCH_CAROUSEL} from "./types"


export const fetchCarousel = () => async dispatch => {
  const response = await freelancer.get('/mainCarousel');
  console.log(response.data);
  dispatch({ type: FETCH_CAROUSEL, payload: response.data });
};