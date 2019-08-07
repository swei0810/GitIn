
import * as APIUtil from '../util/experience_item_api_util';
import { receiveProfileErrors } from './user_actions';

export const RECEIVE_ALL_EXPERIENCE_ITEMS = 'RECEIVE_ALL_EXPERIENCE_ITEMS';
export const RECEIVE_EXPERIENCE_ITEM = 'RECEIVE_EXPERIENCE_ITEM'; 

export const RECEIVE_USER_EXPERIENCE_ITEMS = 'RECEIVE_USER_EXPERIENCE_ITEMS';
export const REMOVE_EXPERIENCE_ITEM = 'REMOVE_EXPERIENCE_ITEM'; 

export const fetchAllExperienceItems = () => dispatch => (
    APIUtil.fetchAllExperienceItems().then(experienceItems => dispatch(receiveAllExperienceItems(experienceItems)))
);
  

// fetchUserExperienceItems
export const fetchUserExperienceItems  = (userId) => dispatch => (
    APIUtil.fetchUserExperienceItems(userId).then(experienceItems =>dispatch(receiveUserExperienceItems(experienceItems)))
)

export const fetchExperienceItem = id => dispatch => {
    return APIUtil.fetchExperienceItem(id)
        .then(experienceItem => {
            return dispatch(receiveExperienceItem(experienceItem))
        }); 
}

// export const createExperienceItem = experienceItem => dispatch => {
//     return APIUtil.createExperienceItem(experienceItem)
//         .then(experienceItem => {
//              return dispatch(receiveExperienceItem(experienceItem));
//     });
// };

export const createExperienceItem = experienceItem => dispatch => (
    APIUtil.createExperienceItem(experienceItem)
        .then(experienceItem => (dispatch(receiveExperienceItem(experienceItem))), 
        err => dispatch(receiveProfileErrors(err.responseJSON)))
);




// export const updateExperienceItem = experienceItem => dispatch => {
//     return APIUtil.updateExperienceItem(experienceItem)
//         .then(experienceItem => {
//             return dispatch(receiveExperienceItem(experienceItem));
//         });
// };


export const updateExperienceItem = experienceItem => dispatch => (
    APIUtil.updateExperienceItem(experienceItem)
        .then(experienceItem=>(dispatch(receiveExperienceItem(experienceItem)), 
        err => (dispatch(receiveProfileErrors(err.responseJSON)))))
)


export const deleteExperienceItem = experienceItemId => dispatch => {
    return APIUtil.deleteExperienceItem(experienceItemId)
        .then(experienceItem => {
             return dispatch(removeExperienceItem(experienceItemId));
    });
};


const receiveAllExperienceItems = (experienceItems) => ({
    type: RECEIVE_ALL_EXPERIENCE_ITEMS, 
    experienceItems
})

const receiveExperienceItem = experienceItem => {
    return {
        type: RECEIVE_EXPERIENCE_ITEM, 
        experienceItem, 
    }

}


const removeExperienceItem = experienceItemId => ({
    type: REMOVE_EXPERIENCE_ITEM, 
    experienceItemId, 
})

const receiveUserExperienceItems = experienceItems => ({
    type: RECEIVE_USER_EXPERIENCE_ITEMS, 
    experienceItems
})