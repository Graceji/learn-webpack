import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import App from '../component/App';
import Group from '../component/Group';
import GroupsSidebar from '../component/GroupsSidebar';
import Users from '../component/Users';
import UsersSidebar from '../component/UsersSidebar';
import Profile from '../component/Profile';

const routes = {
  path: '/build',
  component: App,
  childRoutes: [
    {
      path: 'groups',
      component: Group
      // component: {
      //   main: Group,
      //   sidebar: GroupsSidebar
      // }
    },
    {
      path: 'users',
      component: {
        main: Users,
        sidebar: UsersSidebar
      },
      childRoutes: [
        {
          path: 'users/:userId',
          component: Profile
        }
      ]
    }
  ]
};

render(<App name="grace" />, document.getElementById('root'));
// render(<Router routes={routes} history={browserHistory} />, document.getElementById('root'));
