import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p className="text-center text-danger fs-3 fw-bolder my-2">{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;