import * as actionTypes from './actions';


export const setPage = (page) => {
    return {
        type: actionTypes.SET_PAGE,
        value: page,
        loading: true
    }
       
}