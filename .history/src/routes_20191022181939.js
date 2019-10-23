import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
    <BrowserRouter>
        <Switch>
            <Route path="/repository" component={Repository} />
        </Switch>
    </BrowserRouter>;
}
