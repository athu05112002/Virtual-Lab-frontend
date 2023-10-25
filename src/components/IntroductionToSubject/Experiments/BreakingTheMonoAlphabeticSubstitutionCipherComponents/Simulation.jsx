import React, { useEffect, useState } from 'react'
import Divider from '../Divder';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Simulation = () => {
    const [Index, setIndex] = useState(0);
    let temp = [];
    const [ReplacementHistory, setReplacementHistory] = useState(temp);
    const [PlainText, setPlainText] = useState('');
    const [CipherText, setCipherText] = useState('');
    const [ScratchPad, setScratchPad] = useState('');
    const [InitialCharacter, setInitialCharacter] = useState('');
    const [ReplacedCharacter, setReplacedCharacter] = useState('');
    const [answerKey, setanswerKey] = useState('');
    const [answerPlainText, setanswerPlainText] = useState('');
    const [RandomKey, setRandomKey] = useState('QWERTYUIOPASDFGHJKLZXCVBNM');
    const alphabetFrequenciesInPercent = [8.17, 1.49, 2.78, 4.25, 12.70, 2.23, 2.02, 6.09, 6.97, 0.15, 0.77, 4.03, 2.41, 6.75, 7.51, 1.93, 0.10, 5.99, 6.33, 9.06, 2.76, 0.98, 2.36, 0.15, 1.97, 0.07];


    const sentenceKeyPairs = [
        {
            "key": "QWERTYUIOPASDFGHJKLZXCVBNM",
            "paragraph": "The quick brown fox jumps over the lazy dog. This classic sentence is used to test fonts and keyboards due to its use of every letter in the English alphabet. It is also a playful and whimsical example of a sentence. In the world of design and typography, the choice of fonts and their appearance can significantly impact the message's readability and visual appeal. Font selection is a critical aspect of graphic design, as it can convey different emotions and tones. A well-designed font can enhance the overall aesthetic of a document or artwork."
        },
        {
            "key": "ZXCVBNMASDFGHJKLQWERTYUIOP",
            "paragraph": "A journey of a thousand miles begins with a single step. This ancient proverb reminds us that even the most daunting tasks can be accomplished by taking one small, initial action. It emphasizes the importance of starting and not being overwhelmed by the scale of a goal. Whether it's a personal project, a career change, or a life ambition, the key is to start. Progress comes from taking that first step, and then another, and another. Each step brings you closer to your destination, and before you know it, you've completed the thousand-mile journey you once thought impossible."
        },
        {
            "key": "MNBVCXZLKJHGFDSAPOIUYTREWQ",
            "paragraph": "To be or not to be, that is the question. This famous line from Shakespeare's 'Hamlet' ponders the nature of existence and the choices we face in life. It reflects the universal human dilemma of deciding whether to endure the hardships of life or to end them through one's actions. This profound question has fascinated philosophers, artists, and thinkers for centuries. It highlights the complexities of human nature, the struggle with adversity, and the power of individual choice. It is a timeless reminder of the human capacity for introspection and the eternal quest for meaning in our existence."
        },
        {
            "key": "POIUYTREWQASDFGHJKLZXCVBNM",
            "paragraph": "All the world's a stage, and all the men and women merely players. This famous excerpt from Shakespeare's 'As You Like It' reflects on the cyclical nature of life and the various roles we play throughout our journey. Each person has a part to perform, and we go through different stages in life, from infancy to old age. It emphasizes the idea that we are all actors in the grand drama of life, each with our entrances and exits. This metaphor serves as a poignant reminder of the impermanence of human existence and the ever-changing roles we take on."
        },
        {
            "key": "LKJHGFDSAQWERTYUIOPOMNBVCXZ",
            "paragraph": "The only thing we have to fear is fear itself. This famous quote from Franklin D. Roosevelt's inaugural address in 1933 reflects on the power of fear and its ability to paralyze individuals and societies. It reminds us that fear, often irrational, can be more damaging than the actual challenges we face. Overcoming fear and taking action in the face of adversity is essential for progress and success. This quote inspires us to confront our fears and move forward with courage and determination. It serves as a timeless message of hope and resilience in the face of uncertainty."
        }
    ]
    // all functions 
    for (let i = 0; i < sentenceKeyPairs.length; i++) {
        sentenceKeyPairs[i].paragraph = sentenceKeyPairs[i].paragraph.toUpperCase();
    }
    const isAlphabet = (char) => {
        if (char >= 'A' && char <= 'Z') {
            return true;
        }
        return false;
    }
    const encrypt = (key, paragraph) => {
        let answer = '';
        for (let i = 0; i < paragraph.length; i++) {
            if (!isAlphabet(paragraph[i])) {
                answer = answer + paragraph[i];
                continue;
            }
            let ind = paragraph.charCodeAt(i) - 'A'.charCodeAt(0);
            let c = key[ind];
            answer += c;
        }
        return answer;
    }
    const decrypt = (key, paragraph) => {
        let original = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let answer = '';
        for (let i = 0; i < paragraph.length; i++) {
            if (!isAlphabet(paragraph[i])) {
                answer = answer + paragraph[i];
            }
            else {
                for (let j = 0; j < key.length; j++) {
                    if (key[j] === paragraph[i]) {
                        answer = answer + original[j];
                        break;
                    }
                }
            }
        }
        return answer;
    }
    const notifySuccess = () => {
        toast.success('😊 Congratulations you successfully decrypted the text!', {
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
    const notifyDanger = () => {
        toast.error('Oops 🥲 ! the deciphered content does not match the expected results. Please review and try again!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    function randomStringPermutation(inputString) {
        const charArray = inputString.split(''); // Convert string to an array of characters.
        for (let i = charArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
        }
        return charArray.join(''); // Convert the shuffled array back to a string.
    }
    useEffect(() => {
        // This effect will run whenever Index changes.
        setfreqArray(calculateFrequency()); //eslint-disable-next-line
    }, [Index]);
    const calculateFrequency = () => {
        const size = 26;
        const defaultValue = 0;
        let encryptedParagraph = encrypt(sentenceKeyPairs[Index].key, sentenceKeyPairs[Index].paragraph);
        let newtemp = Array.from({ length: size }, () => defaultValue);
        for (let i = 0; i < encryptedParagraph.length; i++) {
            if (!isAlphabet(encryptedParagraph[i])) continue;
            let ind = encryptedParagraph.charCodeAt(i) - 'A'.charCodeAt(0);
            newtemp[ind]++;
        }
        let sum = 0;
        for (let i = 0; i < newtemp.length; i++) sum += newtemp[i];
        for (let i = 0; i < newtemp.length; i++) newtemp[i] = ((newtemp[i] * 100) / sum).toFixed(2);
        // console.log(newtemp);
        return newtemp;
    }
    const [freqArray, setfreqArray] = useState(calculateFrequency());
    const replacePara = (init, repl) => {
        if (init.length === 0 || repl.length === 0) return;
        if (init.length !== repl.length) return;
        if (init.length > 1) return;
        let answer = '';
        for (let i = 0; i < ScratchPad.length; i++) {
            if (ScratchPad[i] === init) {
                answer = answer + repl;
            }
            else {
                answer = answer + ScratchPad[i];
            }
        }
        setScratchPad(answer);
        return;
    }
    return (
        <div className='container'>
            <ToastContainer />

            {/* Cipher text and frequencies */}
            <p>Decrypt the following cipher text. A tool to simulate the Mono-Alphabetic Subsitution cipher is provided beneath for your assistance. </p>
            <div className='row'>
                {alphabetFrequenciesInPercent.map((ele, idx) => {
                    return (<div key={idx} className='col-1 m-2' style={{
                        border: '1px solid gray',
                        width: '7%',
                        height: '20%',
                        borderRadius: '10px'
                    }}>
                        <div>
                            <div className='text-center'>
                                <div style={{
                                    borderBottom: '2px solid gray',
                                    padding: '2px'
                                }}>
                                    {String.fromCharCode('A'.charCodeAt(0) + idx)}
                                </div>
                                <div className='mt-1 mb-1'>
                                    {ele}
                                </div>
                            </div>

                        </div>
                    </div>)
                })}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Decrypt the following text</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={encrypt(sentenceKeyPairs[Index].key, sentenceKeyPairs[Index].paragraph)} onChange={() => {
                }}></textarea>
            </div>
            <div>
                <button className='btn btn-primary m-2' onClick={(e) => {
                    setIndex((Index) => (Index + 1) % 5);
                    setfreqArray(calculateFrequency());
                }}>Next Cipher Text</button>
                <div>
                    <p>Here are relative frequencies of all characters in above encrypted paragraph for your reference</p>
                    <div className="row">
                        {freqArray.map((ele, idx) => {
                            return (<div key={idx} className='col-1 m-2' style={{
                                border: '1px solid gray',
                                width: '7%',
                                height: '20%',
                                borderRadius: '10px'
                            }}>
                                <div>
                                    <div className='text-center'>
                                        <div style={{
                                            borderBottom: '2px solid gray',
                                            padding: '2px'
                                        }}>
                                            {String.fromCharCode('A'.charCodeAt(0) + idx)}
                                        </div>
                                        <div className='mt-1 mb-1'>
                                            {ele}
                                        </div>
                                    </div>

                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
            <Divider />
            {/* Scratchpad  */}
            <div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Scratch Pad</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={ScratchPad} onChange={(e) => {
                        setScratchPad(e.target.value);
                        setScratchPad((prev) => prev.toUpperCase());
                    }}></textarea>
                </div>
                <div className='row'>
                    <div class="mb-3 col-4">
                        <label for="exampleFormControlInput1" class="form-label">Replace Character : </label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" maxLength={1} placeholder="Character that you want to replace" value={InitialCharacter} onChange={(e) => {
                            setInitialCharacter(e.target.value);
                            setInitialCharacter((prev) => prev.toUpperCase());
                        }} />
                    </div>
                    <div class="mb-3 col-4">
                        <label for="exampleFormControlInput1" class="form-label">With Character :</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" maxLength={1} placeholder="New character that you want to replace the old one " value={ReplacedCharacter} onChange={(e) => {
                            setReplacedCharacter(e.target.value);
                            setReplacedCharacter((prev) => prev.toUpperCase());
                        }} />
                    </div>
                    <div className='mt-4 pt-1 col-2'>
                        <button className='btn btn-primary' onClick={() => {
                            replacePara(InitialCharacter, ReplacedCharacter);
                            let history = `You have replaced the character ${InitialCharacter} with the new character ${ReplacedCharacter}`;
                            setReplacementHistory((prev) => [...prev, history]);
                            console.log(ReplacementHistory);
                        }}>Replace</button>
                    </div>
                </div>
                <ol className='container'>
                    {ReplacementHistory.map((ele, idx) => {
                        return (<li key={idx}>
                            {ele}
                        </li>)
                    })}
                </ol>
            </div>
            <Divider />

            {/* Solution */}
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Key</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your solution key here" onChange={(e) => {
                    setanswerKey(e.target.value);
                    setanswerKey((prev) => prev.toUpperCase());
                }} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Decrypted text </label>
                <textarea class="form-control" id="exampleFormControlTextarea1" value={answerPlainText} rows="3" placeholder='Enter your decrypted plain text here' onChange={(e) => {
                    setanswerPlainText(e.target.value);
                    setanswerPlainText((prev) => prev.toUpperCase());
                }}></textarea>
                <button type="submit" class="btn btn-primary mb-3 mt-3" onClick={(e) => {

                    if (encrypt(answerKey, answerPlainText) === encrypt(sentenceKeyPairs[Index].key, sentenceKeyPairs[Index].paragraph)) {
                        notifySuccess();
                    }
                    else {
                        notifyDanger();
                    }
                }}>Verify my answer</button>
            </div>
            <Divider />

            {/* Encrypt & decrypt */}
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Plain text </label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={PlainText} onChange={(e) => {
                    setPlainText(e.target.value);
                    setPlainText((prev) => prev.toUpperCase());
                }} placeholder='Enter your plain text you want to encrypt here' ></textarea>
            </div>
            <div className='row'>
                <div class="mb-3 col-6">
                    <label for="inputKey" class="form-label">Key</label>
                    <input type="text" class="form-control" id="inputKey" placeholder="Enter your solution key here" value={RandomKey} />
                </div>
                <div className='col-3 container'>
                    <button className='btn btn-primary mt-4 pt-1' onClick={(e) => {
                        let newKey = randomStringPermutation(RandomKey);
                        setRandomKey(newKey);
                    }}>Generate Random key</button>
                </div>
                <div className='container d-flex justify-content-center'>
                    <button className='btn btn-primary col-4 mx-2 my-2' onClick={() => {
                        let req = encrypt(RandomKey, PlainText);
                        setCipherText(req);
                    }}><i className="fa-solid fa-arrow-down mx-2"></i>Encrypt<i className="fa-solid fa-arrow-down mx-2"></i></button>
                    <button className='btn btn-primary col-4 mx-2 my-2' onClick={() => {
                        let req = decrypt(RandomKey, CipherText);
                        setPlainText(req);
                    }}><i className="fa-solid fa-arrow-up mx-2"></i>Decrypt<i className="fa-solid fa-arrow-up mx-2"></i></button>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Encrypted text </label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={CipherText} onChange={(e) => {
                        setCipherText(e.target.value);
                        setCipherText((prev) => prev.toUpperCase());
                    }} placeholder='Enter the encrypted text you want to decrypt here' ></textarea>
                </div>
            </div>

        </div>
    )
}

export default Simulation