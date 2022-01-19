import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from '../Login/Login';
import { Logout } from '../Login/Logout';

const Navbar = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className="navbar">
    {/* isAuthenticated ? (
    <div>
      <img src={user.picture} alt={user.name} />
      <p>{user.name}</p>
      <Logout />
    </div>
  ) : (
    <LoginButton />
  ) */}
  </div>)};

export default Navbar;
