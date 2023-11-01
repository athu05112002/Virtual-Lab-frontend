import React, { useState } from 'react';
import { useContext } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authContext from '../../../../context/authContext';


function Assignment() {
    let user = useContext(authContext);
    const { authToken, setauthToken } = user;
    const [answers, setAnswers] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: '',
        q10: '',
    });
    const correctAnswers = {
        q1: 'A',
        q2: 'D',
        q3: 'C',
        q4: 'B',
        q5: 'A',
        q6: 'D',
        q7: 'B',
        q8: 'D',
        q9: 'A',
        q10: 'D',
    };

    const handleAnswerChange = (question, answer) => {
        setAnswers((prevAnswers) => ({ ...prevAnswers, [question]: answer }));
    };

    const notifySuccess = () => {
        toast.success('😊 Congratulations you successfully submitted the text!', {
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
    const submitAnswers = async () => {
        const url = 'http://localhost:5000/student/updateMarks';

        const score = Object.keys(answers).filter(
            (question) => answers[question] === correctAnswers[question]
        ).length;
        let newScores = authToken.data.user.marks;
        newScores[0] = score;
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



    };

    return (
        <div>
            <ToastContainer />
            <h1>Caesar Cipher Quiz</h1>
            <form>
                <ol>
                    <li>
                        What type of encryption technique is the Caesar cipher?
                        <ul>
                            <li>
                                <input
                                    type="radio"
                                    name="q1"
                                    value="A"
                                    onChange={() => handleAnswerChange('q1', 'A')}
                                />{' '}
                                A) Substitution
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q1"
                                    value="B"
                                    onChange={() => handleAnswerChange('q1', 'B')}
                                />{' '}
                                B) Transposition
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q1"
                                    value="C"
                                    onChange={() => handleAnswerChange('q1', 'C')}
                                />{' '}
                                C) Hybrid
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q1"
                                    value="D"
                                    onChange={() => handleAnswerChange('q1', 'D')}
                                />{' '}
                                D) Asymmetric
                            </li>
                        </ul>
                    </li>
                    <li>
                        In the Caesar cipher, how many positions are typically used for shifting the letters?
                        <ul>
                            <li>
                                <input
                                    type="radio"
                                    name="q2"
                                    value="A"
                                    onChange={() => handleAnswerChange('q2', 'A')}
                                />{' '}
                                A) 1
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q2"
                                    value="B"
                                    onChange={() => handleAnswerChange('q2', 'B')}
                                />{' '}
                                B) 13
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q2"
                                    value="C"
                                    onChange={() => handleAnswerChange('q2', 'C')}
                                />{' '}
                                C) 26
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q2"
                                    value="D"
                                    onChange={() => handleAnswerChange('q2', 'D')}
                                />{' '}
                                D) Any arbitrary number
                            </li>
                        </ul>
                    </li>
                    <li>
                        If you shift the letter 'A' by 3 positions in the Caesar cipher, what letter do you get?
                        <ul>
                            <li>
                                <input
                                    type="radio"
                                    name="q3"
                                    value="A"
                                    onChange={() => handleAnswerChange('q3', 'A')}
                                />{' '}
                                A) A
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q3"
                                    value="B"
                                    onChange={() => handleAnswerChange('q3', 'B')}
                                />{' '}
                                B) B
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q3"
                                    value="C"
                                    onChange={() => handleAnswerChange('q3', 'C')}
                                />{' '}
                                C) D
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q3"
                                    value="D"
                                    onChange={() => handleAnswerChange('q3', 'D')}
                                />{' '}
                                D) C
                            </li>
                        </ul>
                    </li>
                    <li>
                        What is the primary weakness of the Caesar cipher?
                        <ul>
                            <li>
                                <input
                                    type="radio"
                                    name="q4"
                                    value="A"
                                    onChange={() => handleAnswerChange('q4', 'A')}
                                />{' '}
                                A) It's too complicated to use
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q4"
                                    value="B"
                                    onChange={() => handleAnswerChange('q4', 'B')}
                                />{' '}
                                B) It's vulnerable to frequency analysis
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q4"
                                    value="C"
                                    onChange={() => handleAnswerChange('q4', 'C')}
                                />{' '}
                                C) It's resistant to all types of attacks
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q4"
                                    value="D"
                                    onChange={() => handleAnswerChange('q4', 'D')}
                                />{' '}
                                D) It's computationally intensive
                            </li>
                        </ul>
                    </li>
                    <li>
                        In a Caesar cipher with a shift of 5, what letter 'A' becomes when encrypted?
                        <ul>
                            <li>
                                <input
                                    type="radio"
                                    name="q5"
                                    value="A"
                                    onChange={() => handleAnswerChange('q5', 'A')}
                                />{' '}
                                A) F
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q5"
                                    value="B"
                                    onChange={() => handleAnswerChange('q5', 'B')}
                                />{' '}
                                B) Z
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q5"
                                    value="C"
                                    onChange={() => handleAnswerChange('q5', 'C')}
                                />{' '}
                                C) E
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q5"
                                    value="D"
                                    onChange={() => handleAnswerChange('q5', 'D')}
                                />{' '}
                                D) B
                            </li>
                        </ul>
                    </li>
                    <li>
                        What is the maximum number of possible keys in a standard Caesar cipher?
                        <ul>
                            <li>
                                <input
                                    type="radio"
                                    name="q6"
                                    value="A"
                                    onChange={() => handleAnswerChange('q6', 'A')}
                                />{' '}
                                A) 1
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q6"
                                    value="B"
                                    onChange={() => handleAnswerChange('q6', 'B')}
                                />{' '}
                                B) 13
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q6"
                                    value="C"
                                    onChange={() => handleAnswerChange('q6', 'C')}
                                />{' '}
                                C) 25
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q6"
                                    value="D"
                                    onChange={() => handleAnswerChange('q6', 'D')}
                                />{' '}
                                D) 26
                            </li>
                        </ul>
                    </li>
                    <li>
                        Which of the following is an example of a Caesar cipher with a backward shift of 2?
                        <ul>
                            <li>
                                <input
                                    type="radio"
                                    name="q7"
                                    value="A"
                                    onChange={() => handleAnswerChange('q7', 'A')}
                                />{' '}
                                A) "HELLO" encrypted as "JGNNQ"
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q7"
                                    value="B"
                                    onChange={() => handleAnswerChange('q7', 'B')}
                                />{' '}
                                B) "WORLD" encrypted as "TSPKA"
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q7"
                                    value="C"
                                    onChange={() => handleAnswerChange('q7', 'C')}
                                />{' '}
                                C) "ENCRYPT" encrypted as "DPBMQFS"
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q7"
                                    value="D"
                                    onChange={() => handleAnswerChange('q7', 'D')}
                                />{' '}
                                D) "SECURE" encrypted as "VGATEG"
                            </li>
                        </ul>
                    </li>
                    <li>
                        What is the decryption key for a Caesar cipher with a shift of 7?
                        <ul>
                            <li>
                                <input
                                    type="radio"
                                    name="q8"
                                    value="A"
                                    onChange={() => handleAnswerChange('q8', 'A')}
                                />{' '}
                                A) Shift of 7
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q8"
                                    value="B"
                                    onChange={() => handleAnswerChange('q8', 'B')}
                                />{' '}
                                B) Shift of 13
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q8"
                                    value="C"
                                    onChange={() => handleAnswerChange('q8', 'C')}
                                />{' '}
                                C) Shift of 20
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q8"
                                    value="D"
                                    onChange={() => handleAnswerChange('q8', 'D')}
                                />{' '}
                                D) Shift of 3
                            </li>
                        </ul>
                    </li>
                    <li>
                        In a Caesar cipher, if you know the plaintext and ciphertext for a message, how can you find the encryption key?
                        <ul>
                            <li>
                                <input
                                    type="radio"
                                    name="q9"
                                    value="A"
                                    onChange={() => handleAnswerChange('q9', 'A')}
                                />{' '}
                                A) You cannot determine the key with this information.
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q9"
                                    value="B"
                                    onChange={() => handleAnswerChange('q9', 'B')}
                                />{' '}
                                B) Subtract the ciphertext from the plaintext.
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q9"
                                    value="C"
                                    onChange={() => handleAnswerChange('q9', 'C')}
                                />{' '}
                                C) Add the ciphertext to the plaintext.
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q9"
                                    value="D"
                                    onChange={() => handleAnswerChange('q9', 'D')}
                                />{' '}
                                D) Divide the ciphertext by the plaintext.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Which of the following is a common use case for the Caesar cipher in modern times?
                        <ul>
                            <li>
                                <input
                                    type="radio"
                                    name="q10"
                                    value="A"
                                    onChange={() => handleAnswerChange('q10', 'A')}
                                />{' '}
                                A) Secure online banking
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q10"
                                    value="B"
                                    onChange={() => handleAnswerChange('q10', 'B')}
                                />{' '}
                                B) Military communications
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q10"
                                    value="C"
                                    onChange={() => handleAnswerChange('q10', 'C')}
                                />{' '}
                                C) Protecting sensitive data
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="q10"
                                    value="D"
                                    onChange={() => handleAnswerChange('q10', 'D')}
                                />{' '}
                                D) Educational cryptography lessons
                            </li>
                        </ul>
                    </li>
                </ol>
                <button className='m-4 btn btn-primary' type="button" onClick={submitAnswers}>
                    Submit Answers
                </button>
            </form>
        </div>
    );
}

export default Assignment;
