import React from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Aim from './Aim';
import Theory from './Theory';
import Objective from './Objective';
import Procedure from './Procedure';
import Simulation from './Simulation';
import Assignment from './Assignment';
import References from './References';
import Feedback from './Feedback';



const BreakingTheShiftCipherCombined = () => {
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
                        <NavLink className="list-group-item text-center" to='/breakShiftCipher/Aim'>Aim</NavLink>
                        <NavLink className="list-group-item text-center" to='/breakShiftCipher/Theory'>Theory</NavLink>
                        <NavLink className="list-group-item text-center" to='/breakShiftCipher/Objective'>Objective</NavLink>
                        <NavLink className="list-group-item text-center" to='/breakShiftCipher/Procedure'>Procedure</NavLink>
                        <NavLink className="list-group-item text-center" to='/breakShiftCipher/Simulation'>Simulation</NavLink>
                        <NavLink className="list-group-item text-center" to='/breakShiftCipher/Assignment'>Assignment</NavLink>
                        <NavLink className="list-group-item text-center" to='/breakShiftCipher/References'>References</NavLink>
                        <NavLink className="list-group-item text-center" to='/breakShiftCipher/Feedback'>Feedback</NavLink>
                    </ul>

                </div>

                <div className='col-9 d-flex align-items-center justify-content-center overflow-y-auto' style={{

                }} >
                    <Switch>
                        <Route exact path="/breakShiftCipher" render={() => <Redirect to="/breakShiftCipher/Aim" />} />
                        <Route path='/breakShiftCipher/Aim' ><Aim /></Route>
                        <Route path='/breakShiftCipher/Theory' ><Theory /></Route>
                        <Route path='/breakShiftCipher/Objective' ><Objective /></Route>
                        <Route path='/breakShiftCipher/Procedure' ><Procedure /></Route>
                        <Route path='/breakShiftCipher/Simulation' ><Simulation /></Route>
                        <Route path='/breakShiftCipher/Assignment' ><Assignment /></Route>
                        <Route path='/breakShiftCipher/References' ><References /></Route>
                        <Route path='/breakShiftCipher/Feedback' ><Feedback /></Route>
                    </Switch>

                </div>
            </div>




        </div>

    )
}

export default BreakingTheShiftCipherCombined