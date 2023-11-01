import React, { useState } from 'react';
import { useContext } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authContext from '../../../../context/authContext';

const Assignment = () => {
    const initialUserAnswers = Array(10).fill('');
    const [userAnswers, setUserAnswers] = useState(initialUserAnswers);
    const correctAnswers = ['B', 'B', 'D', 'A', 'B', 'B', 'B', 'B', 'B', 'D']
    const handleAnswerChange = (index, answer) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[index] = answer;
        setUserAnswers(updatedAnswers);
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
    let user = useContext(authContext);
    const { authToken, setauthToken } = user;
    const submitAnswers = async () => {

        const url = 'http://localhost:5000/student/updateMarks';
        let score = userAnswers.filter((ele, idx) => {
            return (correctAnswers[idx] === ele)
        }).length;
        let newScores = authToken.data.user.marks;
        newScores[1] = score;
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

    return (
        <div>
            <ToastContainer />
            <h1>Mono-Alphabetic Substitution Cipher MCQs</h1>
            <form>
                <ol>
                    <li>
                        What is a mono-alphabetic substitution cipher?
                        <ul>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q1"
                                        value="A"
                                        onChange={() => handleAnswerChange(0, 'A')}
                                    />{' '}
                                    A) A cipher that uses multiple alphabet shifts
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q1"
                                        value="B"
                                        onChange={() => handleAnswerChange(0, 'B')}
                                    />{' '}
                                    B) A cipher that uses a single fixed substitution for each letter
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q1"
                                        value="C"
                                        onChange={() => handleAnswerChange(0, 'C')}
                                    />{' '}
                                    C) A cipher that rearranges the letters of the alphabet
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q1"
                                        value="D"
                                        onChange={() => handleAnswerChange(0, 'D')}
                                    />{' '}
                                    D) A cipher that uses complex mathematical operations
                                </label>
                            </li>
                        </ul>
                    </li>

                    <li>
                        What is the primary weakness of mono-alphabetic substitution ciphers?
                        <ul>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q2"
                                        value="A"
                                        onChange={() => handleAnswerChange(1, 'A')}
                                    />{' '}
                                    A) They are resistant to cryptanalysis
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q2"
                                        value="B"
                                        onChange={() => handleAnswerChange(1, 'B')}
                                    />{' '}
                                    B) They don't change the frequency of letters
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q2"
                                        value="C"
                                        onChange={() => handleAnswerChange(1, 'C')}
                                    />{' '}
                                    C) They are vulnerable to letter frequency analysis
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q2"
                                        value="D"

                                        onChange={() => handleAnswerChange(1, 'D')}
                                    />{' '}
                                    D) They have a large number of possible keys
                                </label>
                            </li>
                        </ul>
                    </li>

                    <li>
                        Which of the following is a more secure alternative to a mono-alphabetic substitution cipher?
                        <ul>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q3"
                                        value="A"
                                        onChange={() => handleAnswerChange(2, 'A')}
                                    />{' '}
                                    A) Vigenère cipher
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q3"
                                        value="B"
                                        onChange={() => handleAnswerChange(2, 'B')}
                                    />{' '}
                                    B) Transposition cipher
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q3"
                                        value="C"
                                        onChange={() => handleAnswerChange(2, 'C')}
                                    />{' '}
                                    C) Polyalphabetic substitution cipher
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q3"
                                        value="D"
                                        onChange={() => handleAnswerChange(2, 'D')}
                                    />{' '}
                                    D) Block cipher
                                </label>
                            </li>
                        </ul>
                    </li>

                    <li>
                        In a mono-alphabetic substitution cipher, what happens to the frequency of letters in the plaintext?
                        <ul>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q4"
                                        value="A"
                                        onChange={() => handleAnswerChange(3, 'A')}
                                    />{' '}
                                    A) The frequency remains the same
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q4"
                                        value="B"
                                        onChange={() => handleAnswerChange(3, 'B')}
                                    />{' '}
                                    B) The frequency is shifted by a fixed amount
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q4"
                                        value="C"
                                        onChange={() => handleAnswerChange(3, 'C')}
                                    />{' '}
                                    C) The frequency is random
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q4"
                                        value="D"
                                        onChange={() => handleAnswerChange(3, 'D')}
                                    />{' '}
                                    D) The frequency is reversed
                                </label>
                            </li>
                        </ul>
                    </li>

                    <li>
                        What is the main advantage of a mono-alphabetic substitution cipher?
                        <ul>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q5"
                                        value="A"
                                        onChange={() => handleAnswerChange(4, 'A')}
                                    />{' '}
                                    A) It's highly secure
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q5"
                                        value="B"
                                        onChange={() => handleAnswerChange(4, 'B')}
                                    />{' '}
                                    B) It's easy to implement
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q5"
                                        value="C"
                                        onChange={() => handleAnswerChange(4, 'C')}
                                    />{' '}
                                    C) It's resistant to frequency analysis
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q5"
                                        value="D"
                                        onChange={() => handleAnswerChange(4, 'D')}
                                    />{' '}
                                    D) It has a large key space
                                </label>
                            </li>
                        </ul>
                    </li>

                    <li>
                        In a mono-alphabetic substitution cipher, what happens to the letter 'A' in the plaintext?
                        <ul>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q6"
                                        value="A"
                                        onChange={() => handleAnswerChange(5, 'A')}
                                    />{' '}
                                    A) It's always replaced with 'A'
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q6"
                                        value="B"
                                        onChange={() => handleAnswerChange(5, 'B')}
                                    />{' '}
                                    B) It's replaced with a random letter
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q6"
                                        value="C"
                                        onChange={() => handleAnswerChange(5, 'C')}
                                    />{' '}
                                    C) It's replaced with a fixed letter
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q6"
                                        value="D"
                                        onChange={() => handleAnswerChange(5, 'D')}
                                    />{' '}
                                    D) It's replaced with the letter 'Z'
                                </label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        In a monoalphabetic substitution cipher, if 'A' is substituted with 'F,' what will 'B' be substituted with?
                        <ul>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q2"
                                        value="A"

                                        onChange={() => handleAnswerChange(6, 'A')}
                                    />{' '}
                                    A) 'E'
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q2"
                                        value="B"

                                        onChange={() => handleAnswerChange(6, 'B')}
                                    />{' '}
                                    B) 'F'
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q2"
                                        value="C"

                                        onChange={() => handleAnswerChange(6, 'C')}
                                    />{' '}
                                    C) 'G'
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q2"
                                        value="D"

                                        onChange={() => handleAnswerChange(6, 'D')}
                                    />{' '}
                                    D) 'A'
                                </label>
                            </li>
                        </ul>
                    </li>

                    <li>
                        Which of the following is NOT a characteristic of a monoalphabetic substitution cipher?
                        <ul>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q3"
                                        value="A"

                                        onChange={() => handleAnswerChange(7, 'A')}
                                    />{' '}
                                    A) The same plaintext letter is always substituted with the same ciphertext letter.
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q3"
                                        value="B"

                                        onChange={() => handleAnswerChange(7, 'B')}
                                    />{' '}
                                    B) Frequency analysis is ineffective in breaking it.
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q3"
                                        value="C"

                                        onChange={() => handleAnswerChange(7, 'C')}
                                    />{' '}
                                    C) It provides strong security against modern cryptographic attacks.
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q3"
                                        value="D"

                                        onChange={() => handleAnswerChange(7, 'D')}
                                    />{' '}
                                    D) It is relatively easy to implement and use.
                                </label>
                            </li>
                        </ul>
                    </li>

                    <li>
                        If you know that 'E' is substituted with 'X' in a monoalphabetic substitution cipher, what is the ciphertext for the word 'HELLO'?
                        <ul>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q4"
                                        value="A"

                                        onChange={() => handleAnswerChange(8, 'A')}
                                    />{' '}
                                    A) XEXXL
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q4"
                                        value="B"

                                        onChange={() => handleAnswerChange(8, 'B')}
                                    />{' '}
                                    B) HXLLO
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q4"
                                        value="C"

                                        onChange={() => handleAnswerChange(8, 'C')}
                                    />{' '}
                                    C) HEXXL
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q4"
                                        value="D"

                                        onChange={() => handleAnswerChange(8, 'D')}
                                    />{' '}
                                    D) HXXOX
                                </label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        What is a common way to improve the security of monoalphabetic substitution ciphers?
                        <ul>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q5"
                                        value="A"

                                        onChange={() => handleAnswerChange(9, 'A')}
                                    />{' '}
                                    A) Increasing the key length
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q5"
                                        value="B"

                                        onChange={() => handleAnswerChange(9, 'B')}
                                    />{' '}
                                    B) Changing the substitution rules frequently
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q5"
                                        value="C"

                                        onChange={() => handleAnswerChange(9, 'C')}
                                    />{' '}
                                    C) Using a larger alphabet
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="q5"
                                        value="D"

                                        onChange={() => handleAnswerChange(9, 'D')}
                                    />{' '}
                                    D) Encrypting the message multiple times
                                </label>
                            </li>
                        </ul>
                    </li>

                </ol>

            </form>
            <button className='btn btn-primary' onClick={() => {
                submitAnswers();
            }}>Submit</button>
        </div >)
}


export default Assignment;
