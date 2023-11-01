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


const BreakingTheMonoAlphabeticSubstitutionCipherCombined = () => {
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
                        <NavLink className="list-group-item text-center" to='/BreakingTheMonoAlphabeticSubstitutionCipher/Aim'>Aim</NavLink>
                        <NavLink className="list-group-item text-center" to='/BreakingTheMonoAlphabeticSubstitutionCipher/Theory'>Theory</NavLink>
                        <NavLink className="list-group-item text-center" to='/BreakingTheMonoAlphabeticSubstitutionCipher/Objective'>Objective</NavLink>
                        <NavLink className="list-group-item text-center" to='/BreakingTheMonoAlphabeticSubstitutionCipher/Procedure'>Procedure</NavLink>
                        <NavLink className="list-group-item text-center" to='/BreakingTheMonoAlphabeticSubstitutionCipher/Simulation'>Simulation</NavLink>
                        <NavLink className="list-group-item text-center" to='/BreakingTheMonoAlphabeticSubstitutionCipher/Assignment'>Assignment</NavLink>
                        <NavLink className="list-group-item text-center" to='/BreakingTheMonoAlphabeticSubstitutionCipher/References'>References</NavLink>
                        <NavLink className="list-group-item text-center" to='/BreakingTheMonoAlphabeticSubstitutionCipher/Feedback'>Feedback</NavLink>
                    </ul>

                </div>

                <div className='col-9 d-flex align-items-center justify-content-center overflow-y-auto' style={{

                }} >
                    <Switch>
                        <Route exact path="/BreakingTheMonoAlphabeticSubstitutionCipher" render={() => <Redirect to="/BreakingTheMonoAlphabeticSubstitutionCipher/Aim" />} />
                        <Route path='/BreakingTheMonoAlphabeticSubstitutionCipher/Aim' ><Aim /></Route>
                        <Route path='/BreakingTheMonoAlphabeticSubstitutionCipher/Theory' ><Theory /></Route>
                        <Route path='/BreakingTheMonoAlphabeticSubstitutionCipher/Objective' ><Objective /></Route>
                        <Route path='/BreakingTheMonoAlphabeticSubstitutionCipher/Procedure' ><Procedure /></Route>
                        <Route path='/BreakingTheMonoAlphabeticSubstitutionCipher/Simulation' ><Simulation /></Route>
                        <Route path='/BreakingTheMonoAlphabeticSubstitutionCipher/Assignment' ><Assignment /></Route>
                        <Route path='/BreakingTheMonoAlphabeticSubstitutionCipher/References' ><References /></Route>
                        <Route path='/BreakingTheMonoAlphabeticSubstitutionCipher/Feedback' ><Feedback /></Route>
                    </Switch>

                </div>
            </div>




        </div>

    )
}

export default BreakingTheMonoAlphabeticSubstitutionCipherCombined