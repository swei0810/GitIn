import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      if (action.experienceItem) {
        return { modal: action.modal, experienceItem: action.experienceItem };
      }else if (action.educationItem) {
        return { modal: action.modal, educationItem: action.educationItem };
      } else if (action.user){
        return {modal: action.modal, user:action.user}
      } else {
        return {
          modal: action.modal
        };
      }
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}
