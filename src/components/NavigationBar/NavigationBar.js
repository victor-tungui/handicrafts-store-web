import React from 'react';
import { NavLink } from 'react-router-dom';
// import Styles from './NavigationBar.module.css';

const navigationBar = (props) => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href=".">Online Store</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNavigation">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink 
              exact 
              to={{
                pathname:"/"
              }} 
              className="nav-link">Product List</NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to={{
                pathname:"/manage-products"
              }} 
              className="nav-link">Manage Products</NavLink>
        </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default navigationBar; 