import React from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Introduction from './IntroductionToSubject/Introduction';
import Objective from './IntroductionToSubject/Objective';
import ListOfExperiments from './IntroductionToSubject/ListOfExperiments';
import TargetAudience from './IntroductionToSubject/TargetAudience';
import CourseAlignment from './IntroductionToSubject/CourseAlignment';
import Feedback from './IntroductionToSubject/Feedback';
import Footer from './Footer';


const Home = () => {
    const setActiveListItem = (e) => {
        let children = e.currentTarget.children;
        for (let i = 0; i < children.length; i++) {
            children[i].classList.remove('active');
        }
        e.target.classList.add('active');
    }
    return (
        <>
            <div className='container'>
                <div className='row my-5' style={{
                    border: '2px solid gray',
                    borderRadius: '20px'
                }}>
                    <div className='col-3 d-flex align-items-center justify-content-center my-5 border-2'>
                        <ul className="list-group" onClick={(e) => {
                            setActiveListItem(e);
                        }}>
                            <NavLink className="list-group-item" to='/home/introduction'>Introduction</NavLink>
                            <NavLink className="list-group-item" to='/home/objective'>Objective</NavLink>
                            <NavLink className="list-group-item" to='/home/listOfExperiments'>List of experiments</NavLink>
                            <NavLink className="list-group-item" to='/home/targetAudience'>Target Audience</NavLink>
                            <NavLink className="list-group-item" to='/home/courseAlignment'>Course Alignment</NavLink>
                            <NavLink className="list-group-item" to='/home/feedback'>Feedback</NavLink>
                        </ul>

                    </div>

                    <div className='col-9 d-flex align-items-center justify-content-center' >
                        <Switch>
                            <Route exact path="/home" render={() => <Redirect to="/home/introduction" />} />
                            <Route path='/home/introduction'><Introduction /></Route>
                            <Route path='/home/objective'><Objective /></Route>
                            <Route path='/home/listOfExperiments'><ListOfExperiments /></Route>
                            <Route path='/home/targetAudience'><TargetAudience /></Route>
                            <Route path='/home/courseAlignment'><CourseAlignment /></Route>
                            <Route path='/home/feedback'><Feedback /></Route>
                        </Switch>

                    </div>
                </div>


            </div>
            <Footer />
        </>

    )
}

export default Home