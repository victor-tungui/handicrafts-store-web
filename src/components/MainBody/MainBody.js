import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Products from '../../containers/Products/Products';

const mainBody = (props) => (
    <main role="main">
        <div className="container">
            <Switch>
                <Route path="/manage-products" render={() => <h1>Manage Products</h1>} />
                <Route path="/" exact component={Products} />
            </Switch>
        
        </div>
    </main>
);

export default mainBody;