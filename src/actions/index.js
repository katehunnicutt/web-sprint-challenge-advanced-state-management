import axios from 'axios';

export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE"
export const GET_SMURFS_START = "GET_SMURFS_START"
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS"
export const NEW_SMURF = "NEW_SMURF"
export const ERROR_SMURF = "ERROR_SMURF"


export const fetchSmurfs = () => {
    return(dispatch) => {
        dispatch({ type: GET_SMURFS_START })
        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch ({ type: GET_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err, "here kitty kitty")
            dispatch ({ type: GET_SMURFS_FAILURE})
        })
    }
}

export const addSmurf = (e) => {
    console.log('here here ',e)
    return {
        type: NEW_SMURF, payload: e
    }
}
export const setSmurf = () => {
    return { type: ERROR_SMURF }
}

//Task List: X
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//async

//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary) 

//3. Add a standard action that allows us to set the value of the error message slice of state.