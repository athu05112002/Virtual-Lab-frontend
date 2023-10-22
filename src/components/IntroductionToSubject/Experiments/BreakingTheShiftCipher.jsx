import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import BreakingTheShiftCipherCombined from './BreakingShiftCipherComponents/BreakingShiftCipherCombined';
import Simulation from './BreakingShiftCipherComponents/Simulation';

const BreakingTheShiftCipher = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/breakShiftCipher" render={() => <Redirect to="/breakShiftCipher/Aim" />} />
                <Route exact path='/breakShiftCipher/Simulation'><Simulation /></Route>
                <Route path='/breakShiftCipher/'><BreakingTheShiftCipherCombined /></Route>
            </Switch>
        </div>
    )
}

export default BreakingTheShiftCipher