import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import OneTimePadCombined from './OneTimePad/OneTimePadCombined';
import Simulation from './OneTimePad/Simulation';
const OneTimePad = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/OneTimePad" render={() => <Redirect to="/OneTimePad/Aim" />} />
                <Route exact path='/OneTimePad/Simulation'><Simulation /></Route>
                <Route path='/OneTimePad/'><OneTimePadCombined /></Route>
            </Switch>

        </div>
    )
}

export default OneTimePad