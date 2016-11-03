import React from 'react';
import {Route, IndexRoute} from 'react-router';

// COMPONENTS
import App from '../containers/App';
import List from '../containers/List';
import ItemDetail from '../containers/ItemDetail';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={List} />,
        <Route path="/g/:id" component={ItemDetail} />
    </Route>
);
