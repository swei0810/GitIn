export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, props={}) => {
  debugger 
  if (props.educationItem) {
    debugger 
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
