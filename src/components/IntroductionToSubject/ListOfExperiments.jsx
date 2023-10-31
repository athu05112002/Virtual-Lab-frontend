import React from 'react'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import authContext from '../../context/authContext';
const ListOfExperiments = () => {
    let user = useContext(authContext);
    const { authToken } = user;
    return (
        <div className='container'>
            <h2 className='text-center my-4' style={{
                fontFamily: 'Adobe Fan Heiti Std B',
                color: 'skyblue'
            }}>List of experiments</h2>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name of the experiment</th>
                        <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td><NavLink className="list-group-item" to='/breakShiftCipher'>Breaking the shift cipher</NavLink></td>
                        <td>{authToken.user.marks[0]}</td>

                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td><NavLink className="list-group-item" to='/BreakingTheMonoAlphabeticSubstitutionCipher'>Breaking The Mono-alphabetic Substitution Cipher</NavLink></td>
                        <td>{authToken.user.marks[1]}</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td><NavLink className="list-group-item" to='/OneTimePad'>One-Time Pad and Perfect Secrecy</NavLink></td>
                        <td>{authToken.user.marks[2]}</td>
                    </tr>
                </tbody>
            </table>



        </div >
    )
}

export default ListOfExperiments;