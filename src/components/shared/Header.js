/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand title" to="/">RegalRentals</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0 ml-3">
            <input
              className="form-control mr-sm-2 bwm-search"
              type="search"
              placeholder="Search"
              aria-label="Search" />
            <button
              className="btn search-btn btn-outline-primary my-2 py-0 my-sm-0"
              type="submit">Search</button>
          </form>
          <ul className="navbar-nav ml-auto mr-3">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Manage
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/account">Account</Link>
                <Link className="dropdown-item" to="/location">Location</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/somewhere">Something else here</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header;