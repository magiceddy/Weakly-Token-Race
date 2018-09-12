import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { DrizzleProvider } from 'drizzle-react';
import { ConnectedRouter } from 'connected-react-router';
import { LoadingContainer } from 'drizzle-react-components';
import { history, store } from './redux/store';
import drizzleOptions from './drizzleOptions';
import { App } from './containers';

ReactDOM.render((
  <DrizzleProvider options={drizzleOptions} store={store}>
    <LoadingContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Switch>
              <Route exact path="/" component={App} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    </LoadingContainer>
  </DrizzleProvider>
),
document.getElementById('app')
);
