import React from 'react';

const navigationBar = (props) => {
  let navbar = <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href=".">Online Store</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNavigation">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href=".">Products <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=".">Manage Products</a>
      </li>
      </ul>
    </div>
  </nav>

  return navbar;
};

export default navigationBar; 