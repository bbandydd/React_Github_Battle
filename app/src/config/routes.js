import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App, Home, Player, ConfirmBattle, InitialResults } from '../components';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="playerOne" header="Player One" component={Player} />
            <Route path="playerTwo/:playerOne" header="Player Two" component={Player} />
            <Route path="battle" component={ConfirmBattle} />
            <Route path='results' component={InitialResults} />
        </Route>
    </Router>
);

export default routes;