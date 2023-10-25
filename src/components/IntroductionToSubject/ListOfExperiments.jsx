import React from 'react'
import { NavLink } from 'react-router-dom';
const ListOfExperiments = () => {
    return (
        <div className='container'>
            <h2 className='text-center my-4' style={{
                fontFamily: 'Adobe Fan Heiti Std B',
                color: 'skyblue'
            }}>List of experiments</h2>
            <ol>
                <li><NavLink className="list-group-item" to='/breakShiftCipher'>Breaking the shift cipher</NavLink></li>
                <li><NavLink className="list-group-item" to='/BreakingTheMonoAlphabeticSubstitutionCipher'>Breaking The Mono-alphabetic Substitution Cipher</NavLink></li>
            </ol>

        </div >
    )
}

export default ListOfExperiments;