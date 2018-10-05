import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'

import App from './App'
import Landing from './Landing'

const Main = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' render={ () => <Landing /> } />
                <Route exact path='/app' render={ () => <App /> } />
                <Route render={ () => <Landing /> } />
            </Switch>
        </HashRouter>
    )
}

export default Main
