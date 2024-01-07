import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import authContext from '../context/authContext';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const LoginRegister = () => {
    const [name, setname] = useState('');
    const [rollNo, setrollNo] = useState('');
    const [password, setpassword] = useState('');
    let user = useContext(authContext);
    const { setauthToken } = user;

    const handleLogin = async () => {
        let data = {
            RollNo: rollNo,
            password: password
        }
        let reqData = await fetch('http://localhost:5000/student/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        console.log('tried to login');
        reqData = await reqData.json();
        if (reqData.data) {
            setauthToken(reqData);
            const authTokenObject = reqData;
            const authToken = JSON.stringify(authTokenObject);
            const expirationTime = new Date();
            expirationTime.setTime(expirationTime.getTime() + 60 * 60 * 1000); // 1 hour in milliseconds
            document.cookie = `authToken=${authToken}; expires=${expirationTime.toUTCString()}; path=/`;

        }
        else {
            window.alert('Please try again with correct credentials');
        }


        console.log(reqData);

    }
    const handleRegister = async () => {
        const url = 'http://localhost:5000/student/login';
        let data = {
            name: name,
            RollNo: rollNo,
            password: password
        }

        let reqData = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        console.log('tried to register');
        reqData = await reqData.json();
        if (reqData.data) {
            setauthToken(reqData);
            const authTokenObject = reqData;
            const authToken = JSON.stringify(authTokenObject);
            const expirationTime = new Date();
            expirationTime.setTime(expirationTime.getTime() + 60 * 60 * 1000); // 1 hour in milliseconds
            document.cookie = `authToken=${authToken}; expires=${expirationTime.toUTCString()}; path=/`;
            <Redirect to="/home" />
        }
        else {
            window.alert('Please enter valid name');
        }
        console.log(reqData);
    }
    return (

        <div className='container w-50'>
            <Router>
                <Switch>
                    {/* <Route exact path='/' render={() => <Redirect to="/login" />}></Route> */}
                    <Route>
                        <div className='mt-4'>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Scholar No</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" value={rollNo} onChange={(e) => {
                                    setrollNo(e.target.value);
                                }} placeholder="Enter your Scholar No" required />
                            </div>
                            {/* <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" value={name} onChange={(e) => {
                                    setname(e.target.value);
                                }} placeholder="Enter your name" />
                            </div> */}
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleFormControlInput1" value={password} onChange={(e) => {
                                    setpassword(e.target.value);
                                }} placeholder="Enter your password" required />
                            </div>
                            <button className='btn btn-primary m-2' onClick={() => {
                                handleLogin();
                            }} >Login</button>
                            {/* <button className='btn btn-primary m-2' onClick={() => {
                                handleRegister();
                            }}>Register</button> */}
                        </div>
                    </Route>
                    <Route exact path='/register'>
                        <div className='mt-4'>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Scholar No</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" value={rollNo} onChange={(e) => {
                                    setrollNo(e.target.value);
                                }} placeholder="Enter your Scholar No" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" value={name} onChange={(e) => {
                                    setname(e.target.value);
                                }} placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleFormControlInput1" value={password} onChange={(e) => {
                                    setpassword(e.target.value);
                                }} placeholder="Enter your password" required />
                            </div>
                            <button className='btn btn-primary m-2' onClick={() => {
                                handleLogin();
                            }} >Login</button>
                            <button className='btn btn-primary m-2' onClick={() => {
                                handleRegister();
                            }}>Register</button>
                        </div>
                    </Route>
                </Switch>
            </Router>


        </div>

    )
}

export default LoginRegister