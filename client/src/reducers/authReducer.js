/* eslint-disable import/no-anonymous-default-export */
import {SIGN_IN,SIGN_OUT} from '../actions/types'

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
}

export default (state = INITIAL_STATE , action) =>{

    switch(action.type){

        case SIGN_IN :
            return {...state, isSignedIn : true , userId : action.payload};
        case SIGN_OUT :
            return {...state, isSignedOut : false , userId : null};
        default :
            return state;
    }
};