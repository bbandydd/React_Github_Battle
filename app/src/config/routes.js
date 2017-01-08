import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App, Home, Player, ConfirmBattle } from '../components';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="playerOne" header="Player One" component={Player} />
            <Route path="playerTwo/:playerOne" header="Player Two" component={Player} />
            <Route path="battle" component={ConfirmBattle} />
        </Route>
    </Router>
);

export default routes;