import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';

import configStore from '../configs/store';
import routes from '../configs/routes';

const store = configStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    {routes}
                </Router>
            </Provider>
        );
    };
};
