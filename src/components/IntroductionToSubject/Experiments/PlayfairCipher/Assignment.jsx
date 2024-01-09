import React, { useState, useContext } from 'react'
import Question from '../../Question'
import Divder from '../Divder'
import Questions, { correctAns } from './PlayfairQuestions';
import 'react-toastify/dist/ReactToastify.css';
import authContext from '../../../../context/authContext';
import { ToastContainer, toast } from 'react-toastify';


const Assignment = () => {
    // const { Sno, question, op1, op2, op3, op4, correctAns } = props;
    const [selectedOptions, setSelectedOptions] = useState([]);
    let user = useContext(authContext);
    const { authToken, setauthToken } = user;
    const submitAnswers = async () => {
        const url = 'http://localhost:5000/student/updateMarks';
        let score = selectedOptions.filter((ele, idx) => {
            return (correctAns[idx] === ele)
        }).length;
        let newScores = authToken.data.user.marks;
        newScores[3] = score;
        console.log(newScores);
        let data = {
            newScores
        }
        console.log(authToken);
        let reqData = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken.authToken,
            },
            body: JSON.stringify(data),
        });
        reqData = await reqData.json();
        console.log(reqData);
        setauthToken(reqData);
        notifySuccess();
        console.log(score);
    };


    const notifySuccess = () => {
        toast.success('😊 Congratulations you successfully submitted the test!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };
    console.log(selectedOptions);
    console.log(correctAns);

    return (
        <div className='container'>
            <ToastContainer />
            <h2 className='text-center my-4' style={{
                fontFamily: 'Adobe Fan Heiti Std B',
                color: 'skyblue',
                borderBottom: '1px solid gray',
                paddingBottom: '4px',
            }}>Assignment</h2>
            {Questions.map((ele, idx) => {
                return (
                    <div key={ele.Sno}>
                        <Question
                            Sno={ele.Sno}
                            question={ele.question}
                            options={ele.options}

                            setSelectedOptions={setSelectedOptions}
                        />
                        <Divder />
                    </div>);
            })}
            <button className='btn btn-primary' onClick={async () => {
                await submitAnswers();
            }}>Submit</button>


        </div>
    )
}

export default Assignment