import {SIGN_IN,SIGN_OUT} from '../actions/types'

const INITIAL_STATE = {
    isSignedIn: null
}

export default (state = INITIAL_STATE , action) =>{

    switch(action.type){

        case SIGN_IN :
            return {...state, isSignedIn : true};
        case SIGN_OUT :
            return {...state, isSignedOut : false};
        default :
            return state;
    }
};