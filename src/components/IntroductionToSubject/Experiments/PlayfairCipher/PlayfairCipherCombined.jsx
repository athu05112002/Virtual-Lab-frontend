import React from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Aim from './Aim';
import Theory from './Theory';
import Objective from './Objective';
import Procedure from './Procedure';
import Simulation from './Simulation';
import Assignment from './Assignment';
import References from './References';
import Feedback from '../Feedback';





const PlayfairCipherCombined = () => {
    const setActiveListItem = (e) => {
        let children = e.currentTarget.children;
        for (let i = 0; i < children.length; i++) {
            children[i].classList.remove('active');
        }
        e.target.classList.add('active');
    }
    return (
        <div >

            <div className='row container' >
                <div className='col-3 border-2 my-5 d-flex justify-content-start align-content-start'>
                    <ul className="list-group w-75 " onClick={(e) => {
                        setActiveListItem(e);
                    }}>
                        <NavLink className="list-group-item text-center" to='/playfairCipher/Theory'>Theory</NavLink>
                        <NavLink className="list-group-item text-center" to='/playfairCipher/Aim'>Aim</NavLink>
                        <NavLink className="list-group-item text-center" to='/playfairCipher/Objective'>Objective</NavLink>
                        <NavLink className="list-group-item text-center" to='/playfairCipher/Procedure'>Procedure</NavLink>
                        <NavLink className="list-group-item text-center" to='/playfairCipher/Simulation'>Simulation</NavLink>
                        <NavLink className="list-group-item text-center" to='/playfairCipher/Assignment'>Assignment</NavLink>
                        <NavLink className="list-group-item text-center" to='/playfairCipher/References'>References</NavLink>
                        <NavLink className="list-group-item text-center" to='/playfairCipher/Feedback'>Feedback</NavLink>
                    </ul>

                </div>

                <div className='col-9 d-flex align-items-center justify-content-center overflow-y-auto' style={{

                }} >
                    <Switch>
                        <Route exact path="/playfairCipher" render={() => <Redirect to="/breakShiftCipher/Aim" />} />
                        <Route path='/playfairCipher/Aim' ><Aim /></Route>
                        <Route path='/playfairCipher/Theory' ><Theory /></Route>
                        <Route path='/playfairCipher/Objective' ><Objective /></Route>
                        <Route path='/playfairCipher/Procedure' ><Procedure /></Route>
                        <Route path='/playfairCipher/Simulation' ><Simulation /></Route>
                        <Route path='/playfairCipher/Assignment' ><Assignment /></Route>
                        <Route path='/playfairCipher/References' ><References /></Route>
                        <Route path='/playfairCipher/Feedback' ><Feedback /></Route>
                    </Switch>

                </div>
            </div>




        </div>

    )
}

export default PlayfairCipherCombined;