/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  const { link, text } = props;

  return (
    <button>
      <Link to={link} className="link" className="button_link">{text}</Link>
    </button >
  )
}

export default Button;
