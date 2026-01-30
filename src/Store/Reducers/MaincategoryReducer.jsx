import { ADD_MAINCATEGORY_RED,DELETE_MAINCATEGORY_RED,GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY_RED} from "../Constants"

export default function MaincategoryReducer(state=[],action)
{
    switch(action.type){
        case ADD_MAINCATEGORY_RED:
            state.push(action.data)
            return state

        case GET_MAINCATEGORY_RED:
            return action.data 
       

            
        default:
            return state
    }
}