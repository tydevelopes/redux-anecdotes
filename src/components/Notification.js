import React from 'react';
import { connect } from 'react-redux';

const Notification = props => {
  const style = {
    border: 'solid',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1
  };

  const renderNotification = () => {
    const shouldRender = props.notification.shouldRender;

    if (shouldRender) {
      return <div style={style}>{props.notification.message}</div>;
    }
    return null;
  };

  return renderNotification();
};

const mapStateToProps = state => {
  return {
    notification: state.notification
  };
};

export default connect(mapStateToProps)(Notification);
