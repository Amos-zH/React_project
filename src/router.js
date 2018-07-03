import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { getRouterData } from './common/routers';
import IndexPage from './routes/IndexPage';
import BasicLayout from './layouts/BasicLayout';
import registration from './routes/recruit/registration';
import Handing from './routes/process/handing';
import Todo from './routes/process/todo';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/index" exact component={IndexPage} />
        <Route path="/" exact component={BasicLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
