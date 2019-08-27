import React from 'react';

const Notification = ({ store }) => {
  const style = {
    border: 'solid',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1
  };

  const renderNotification = () => {
    const shouldRender = store.getState().notification.shouldRender;

    if (shouldRender) {
      return <div style={style}>{store.getState().notification.message}</div>;
    }
    return null;
  };

  return renderNotification();
};

export default Notification;
