import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import CompanyLogo from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/company.png'
const NavbarProfile = () => {
  const { user, logout } = useAuth();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="navbar-profile">
      <div className="navbar-logo-profile">
        <img src={CompanyLogo} alt="Company Logo" />
      </div>
      <div className="navbar-links-profile">
        <Link to="/">Home</Link>
        <a href="#contact">Contact</a>
        <a href="#Training Plans">Training Plans</a>
        <Link to="/">Diet Plans</Link>
      </div>
      <div className="navbar-profile-dropdown">
        <span className="navbar-username" onClick={toggleDropdown}>
          {user ? user.name || user.username : 'Guest'}
        </span>
        {dropdownVisible && (
          <div className="dropdown-menu show">
            {user ? (
              <>
                <a href="/profile">{user.name || user.username}</a>
                <div>
                  <button onClick={handleLogout}>Log Out</button>
                </div>
              </>
            ) : (
              <>
                <a href="/login">Login</a>
                <a href="/signup">Sign Up</a>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarProfile;
