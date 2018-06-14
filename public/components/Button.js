/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  const { link, text, className } = props;

  return (
    <button className={className} >
      <h4><Link to={link} className="link">{text}</Link></h4>
    </button >
  )
}

export default Button;
