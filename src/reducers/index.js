import {
    GET_SMURFS_FAILURE,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_START, 
    NEW_SMURF,
    ERROR_SMURF
} from '../actions'

export const initialState = {
    smurfs: [{
    name:"",
    position:"",
    nickname:"",
    description:"",
    id: Date.now()
    }],
    
    isLoading: false,
    error: '', 
    }
    

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ERROR_SMURF:
            return {
                ...state, 
                error: 'Name, position, and nickname are required for smurfs.'
            }
        case NEW_SMURF:
            return{
                ...state,
                smurfs: [{...state.smurfs, 
                        name: action.payload.name,
                        position: action.payload.position,
                        nickname: action.payload.nickname,
                        description: action.payload.description,
                }]
            }
        case GET_SMURFS_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs:  action.payload,
                isLoading: false,
                error: '',
            }
        case GET_SMURFS_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    error: '',
                }
        default:
            return state;
    }
}

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs X
//  - a boolean indicating if the app is loading X
//  - a string indicating a possible error message X

//2. Add in the arguments needed to complete a standard reducer function. X
//3. Add in a reducer case to accomidate the start of a smurf fetch. X
//4. Add in a reducer case to accomidate the successful smurf api fetch. X
//5. Add in a reducer cases to accomidate the failed smurf api fetch. X
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message. 