import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import experienceItemsReducer from './experience_items_reducer'; 
import educationItemReducer from './education_items_reducer'; 
import modalReducer from './modal_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer, 
  experienceItems: experienceItemsReducer, 
  educationItems: educationItemReducer, 
  modal: modalReducer 
});

export default entitiesReducer;