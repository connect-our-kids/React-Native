import {SEARCH_SUCCESS,LOADING, MODAL_VISIBLE,CLEAR_SEARCH} from "../actions";


const initialState = {
  activeFilter: 0,
  searchResults:[],
  fetching:false,
  modalVisible:false
};
export const search = (state = initialState, action) => {
    switch(action.type){
        case LOADING:
            return{
                ...state,
                fetching:true
            }
        case SEARCH_SUCCESS:
            return{
                ...state,
                searchResults: action.payload,
                fetching:false
            }
        case MODAL_VISIBLE:
            return{
                ...state,
                modalVisible:!state.modalVisible,
            }
        case CLEAR_SEARCH:
            return{
                ...state,
                searchResults:[]
            }
        default:
            return{
               ...state
            }
    }
}