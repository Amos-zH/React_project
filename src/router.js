import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { getRouterData } from './common/routers';
import IndexPage from './routes/IndexPage';
import MainPage from './routes/MainPage';
import registration from './routes/recruit/registration';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/main" exact component={MainPage} />
        <Route path="/recruit/registration" exact component={registration} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
