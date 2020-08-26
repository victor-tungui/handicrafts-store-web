import React from 'react';
import { Route } from 'react-router-dom';
import Products from '../../containers/Products/Products';

const mainBody = (props) => (
    <main role="main">
        <div className="container">
        <Route path="/" component={Products} />
        <Route path="/manage-products" render={() => <h1>Manage Products</h1>} />
        </div>
    </main>
);

export default mainBody;