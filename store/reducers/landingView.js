import {LOADING} from "../actions";

const initialState = {
  characters: [],
  fetching:false,
  error:null
};
export const landingView = (state = initialState, action) => {
    switch(action.type){
        case LOADING:{
            return{
                ...state,
                fetching:true
            }
        }
        default:
            return{
                state
            }
    }
}