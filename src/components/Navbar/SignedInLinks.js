import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Search</NavLink>
      </li>
      <li>
        <NavLink to="/">My Favourites</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
    </ul>
  )
}

export default SignedInLinks;