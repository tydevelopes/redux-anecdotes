// action creator
export const displayMessage = message => {
  return {
    type: 'SHOW_NOTIFICATION',
    data: { message, shouldRender: true }
  };
};

export const removeMessage = () => {
  return {
    type: 'REMOVE_NOTIFICATION',
    data: { shouldRender: false }
  };
};

const notificationReducer = (
  state = { message: '', shouldRender: false },
  action
) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return { message: action.data.message, shouldRender: true };
    case 'REMOVE_NOTIFICATION':
      return { shouldRender: false };
    default:
      return state;
  }
};

export default notificationReducer;
