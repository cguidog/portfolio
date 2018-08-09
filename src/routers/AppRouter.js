import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ProjectDashboardPage from '../components/ProjectDashboardPage';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={ProjectDashboardPage} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;