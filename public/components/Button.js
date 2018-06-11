/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  const { link, text, className } = props;

  return (
    <button className={className} >
      <Link to={link} className="link">{text}</Link>
    </button >
  )
}

export default Button;
