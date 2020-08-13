import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '@/app/index';
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import rootReducer from './stores/reducers/auth';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route path='/' exact component={App} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app')
)

