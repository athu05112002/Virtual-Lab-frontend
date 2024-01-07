import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Simulation from './PlayfairCipher/Simulation';
import PlayfairCipherCombined from './PlayfairCipher/PlayfairCipherCombined';


const PlayfairCipher = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/playfairCipher' render={() => <Redirect to='/playfairCipher/Aim' />} ></Route>
                <Route exact path='/playfairCipher/Simulation' ><Simulation /></Route>
                <Route path='/playfairCipher/'><PlayfairCipherCombined /></Route>
            </Switch>
        </div>
    )
}

export default PlayfairCipher