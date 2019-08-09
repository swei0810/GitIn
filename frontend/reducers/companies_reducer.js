import merge from 'lodash/merge'; 

import {RECEIVE_ALL_COMPANIES, RECEIVE_COMPANY} from '../actions/company_actions';

const companyReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_COMPANIES:
            return merge({}, action.companies)
        case RECEIVE_COMPANY: 
            return merge({}, state, {[action.company.id]: action.company});
        default: 
            return state; 
    }

}

export default companyReducer; 