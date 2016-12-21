/* global document */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import style from '../../public/stylesheets/main.scss'; 
import App from './components/App.jsx';
import SignupClass from './components/SignupClass';
import Home from './components/Home.jsx';
import LoginClass from './components/LoginClass';
import Game from './containers/GameContainer';
//import Payment from './containers/PaymentContainer';
import Leaderboard from './containers/LeaderboardContainer';
import PaymentsClass from './components/PaymentsClass';
import { Provider } from 'react-redux';
import store from './store';


const rootRouter = 
  <Provider store={store}>
      <Router history={browserHistory} >
        <Route path="/" component={App} >
          <IndexRoute component={Home} />
          <Route path="/signup" component={SignupClass} />
          <Route path="/login" component={LoginClass} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/payments" component={PaymentsClass} />
          <Route path="/game" component={Game} />
        </Route>
      </Router>
  </Provider>;
  console.log(rootRouter)


render(rootRouter, 
document.getElementById('app'));
