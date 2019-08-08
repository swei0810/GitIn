export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, props={}) => {
  if (props.educationItem) {
    const educationItem = props.educationItem; 
    return {
      type: OPEN_MODAL, 
      modal,
      educationItem 
    };

  } else if(props.experienceItem){
    const experienceItem = props.experienceItem; 
    return {
      type: OPEN_MODAL, 
      modal,
      experienceItem
    }
  } else if (props.user){
    const user = props.user; 
    return {
      type: OPEN_MODAL, 
      modal, 
      user
    }

  } else {
    return {
      type: OPEN_MODAL,
      modal
    };
  } 
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
