import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import PropTypes from 'prop-types';

import App from './components/App';
import PhotoPage from './containers/PhotoPage';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/photos/:id' component={PhotoPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
 document.getElementById('root')
);
