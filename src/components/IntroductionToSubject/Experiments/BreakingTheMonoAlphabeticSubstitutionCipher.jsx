import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import BreakingTheMonoAlphabeticSubstitutionCipherCombined from './BreakingTheMonoAlphabeticSubstitutionCipherComponents/BreakingTheMonoAlphabeticSubstitutionCipherCombined';
import Simulation from './BreakingTheMonoAlphabeticSubstitutionCipherComponents/Simulation';

const BreakingTheMonoAlphabeticSubstitutionCipher = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/BreakingTheMonoAlphabeticSubstitutionCipher" render={() => <Redirect to="/BreakingTheMonoAlphabeticSubstitutionCipher/Aim" />} />
                <Route exact path='/BreakingTheMonoAlphabeticSubstitutionCipher/Simulation'><Simulation /></Route>
                <Route path='/BreakingTheMonoAlphabeticSubstitutionCipher/'><BreakingTheMonoAlphabeticSubstitutionCipherCombined /></Route>
            </Switch>
        </div>
    )
}

export default BreakingTheMonoAlphabeticSubstitutionCipher