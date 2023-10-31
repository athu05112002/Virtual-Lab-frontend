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



const OneTimePadCombined = () => {
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
                        <NavLink className="list-group-item text-center" to='/OneTimePad/Aim'>Aim</NavLink>
                        <NavLink className="list-group-item text-center" to='/OneTimePad/Theory'>Theory</NavLink>
                        <NavLink className="list-group-item text-center" to='/OneTimePad/Objective'>Objective</NavLink>
                        <NavLink className="list-group-item text-center" to='/OneTimePad/Procedure'>Procedure</NavLink>
                        <NavLink className="list-group-item text-center" to='/OneTimePad/Simulation'>Simulation</NavLink>
                        <NavLink className="list-group-item text-center" to='/OneTimePad/Assignment'>Assignment</NavLink>
                        <NavLink className="list-group-item text-center" to='/OneTimePad/References'>References</NavLink>
                        <NavLink className="list-group-item text-center" to='/OneTimePad/Feedback'>Feedback</NavLink>
                    </ul>

                </div>

                <div className='col-9 d-flex align-items-center justify-content-center overflow-y-auto' style={{

                }} >
                    <Switch>
                        <Route exact path="/BreakingTheMonoAlphabeticSubstitutionCipher" render={() => <Redirect to="/BreakingTheMonoAlphabeticSubstitutionCipher/Aim" />} />
                        <Route path='/OneTimePad/Aim' ><Aim /></Route>
                        <Route path='/OneTimePad/Theory' ><Theory /></Route>
                        <Route path='/OneTimePad/Objective' ><Objective /></Route>
                        <Route path='/OneTimePad/Procedure' ><Procedure /></Route>
                        <Route path='/OneTimePad/Simulation' ><Simulation /></Route>
                        <Route path='/OneTimePad/Assignment' ><Assignment /></Route>
                        <Route path='/OneTimePad/References' ><References /></Route>
                        <Route path='/OneTimePad/Feedback' ><Feedback /></Route>
                    </Switch>

                </div>
            </div>




        </div>

    )
}

export default OneTimePadCombined