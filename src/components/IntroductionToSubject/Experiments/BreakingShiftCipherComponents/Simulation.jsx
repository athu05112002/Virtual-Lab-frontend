import React, { useState } from 'react'
import Divder from '../Divder';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Simulation = () => {
    const [PlainText, setPlainText] = useState('');
    const [CipherText, setCipherText] = useState('');
    const [answerPlainText, setanswerPlainText] = useState('');
    const [answerKey, setanswerKey] = useState('');
    let sentenceKeyPairs = [
        { "key": 3, "sentence": "The beautiful sunset painted the sky in shades of orange and pink, casting a warm glow over the tranquil sea." },
        { "key": 9, "sentence": "In the heart of autumn, the crisp air is filled with the aroma of freshly baked apple pies, making every bite a delightful experience." },
        { "key": 14, "sentence": "The soothing melodies of classical music have the power to transport the listener to a world of serenity and emotions that words cannot express." },
        { "key": 20, "sentence": "Exploring the lush green forests, you can't help but be amazed by the intricate beauty of nature, from the delicate leaves to the vibrant wildlife." },
        { "key": 22, "sentence": "As we grow older, the relentless passage of time becomes more apparent, reminding us to cherish each moment and create lasting memories with loved ones." }
    ]
    function isAlphabet(char) {
        const charCode = char.charCodeAt(0);
        return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
    }
    const decypt = (sentence, tkey) => {
        if (key < 0 || key > 25) {
            return "Invalid key. Key must be between 0 and 25.";
        }
        sentence = sentence.toUpperCase();
        let encryptedSentence = "";
        for (let i = 0; i < sentence.length; i++) {
            if (!isAlphabet(sentence[i])) continue;
            let currCode = sentence.charCodeAt(i);
            let codeOfA = ('A').charCodeAt(0);
            let assumedCode = (parseInt(currCode) - codeOfA);
            let encryptedCode = (parseInt(assumedCode) - parseInt(tkey) + 26) % 26;
            encryptedCode = parseInt(encryptedCode) + codeOfA;
            let c = String.fromCharCode(encryptedCode);
            encryptedSentence += c;
        }
        return encryptedSentence;
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
    const encrypt = (sentence, tkey) => {
        if (key < 0 || key > 25) {
            return "Invalid key. Key must be between 0 and 25.";
        }
        sentence = sentence.toUpperCase();
        let encryptedSentence = "";
        for (let i = 0; i < sentence.length; i++) {
            if (!isAlphabet(sentence[i])) continue;
            let currCode = sentence.charCodeAt(i);
            let codeOfA = ('A').charCodeAt(0);
            let assumedCode = (parseInt(currCode) - codeOfA);
            let encryptedCode = (parseInt(assumedCode) + parseInt(tkey)) % 26;
            encryptedCode = parseInt(encryptedCode) + codeOfA;
            let c = String.fromCharCode(encryptedCode);
            encryptedSentence += c;
        }
        return encryptedSentence;
    }

    const [Index, setIndex] = useState(0);

    let keyArray = [];
    for (let i = 1; i <= 25; i++) keyArray.push(i);
    const [key, setkey] = useState(1);
    return (
        <div className='container'>
            <ToastContainer />
            <div className='container my-4'>
                <div className="mb-3 row">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Cipher text to be decrypted</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={() => {

                    }} value={encrypt(sentenceKeyPairs[Index].sentence, sentenceKeyPairs[Index].key)}></textarea>
                    <button className='btn btn-primary col-3 my-2' onClick={() => {
                        setIndex(Index => (Index + 1) % 5);
                    }}>Next ciphertext</button>
                </div>

            </div>

            <Divder />

            <div className="mb-3 mt-3 container">
                <label htmlFor="exampleFormControlTextarea1" className="form-label mb-3">Space for your rough work </label>
                <textarea className="form-control mb-3" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <Divder />

            <div className='container my-4'>
                <div className="mb-3 row">
                    <div className='col-11'>
                        <label htmlFor="exampleFormControlTextarea1" className="form-label mb-3">Plain text </label>
                        <textarea className="form-control mb-3" id="exampleFormControlTextarea1" rows="3" value={PlainText} onChange={(e) => {
                            setPlainText(e.target.value);
                        }}></textarea>
                    </div>
                    <div className='col-1'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Key</label>
                        <select className="form-select" aria-label="Default select example" value={key} onChange={(e) => {
                            setkey(e.target.value);

                        }}>
                            {keyArray.map((ele) => {
                                return <option key={ele} value={ele}>{ele} </option>
                            })}
                        </select>
                    </div>
                    <div className='container d-flex justify-content-center'>
                        <button className='btn btn-primary col-4 mx-2 my-2' onClick={() => {
                            let req = encrypt(PlainText, key);
                            setCipherText(req);
                        }}><i className="fa-solid fa-arrow-down mx-2"></i>Encrypt<i className="fa-solid fa-arrow-down mx-2"></i></button>
                        <button className='btn btn-primary col-4 mx-2 my-2' onClick={() => {
                            let req = decypt(CipherText, key);
                            setPlainText(req);
                        }}><i className="fa-solid fa-arrow-up mx-2"></i>Decrypt<i className="fa-solid fa-arrow-up mx-2"></i></button>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Cipher text </label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={CipherText} onChange={(e) => {
                        setCipherText(e.target.value);
                    }}></textarea>
                </div>

                <Divder />
                <div className='row'>
                    <h4>Enter your decrypted plain text and key to verify </h4>
                    <div className='col-11'>
                        <label htmlFor="exampleFormControlTextarea1" className="form-label mb-3">Plain text </label>
                        <textarea className="form-control mb-3" id="exampleFormControlTextarea1" rows="3" value={answerPlainText} onChange={(e) => {
                            setanswerPlainText(e.target.value);
                        }}></textarea>
                    </div>
                    <div className='col-1'>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Key</label>
                        <select className="form-select" aria-label="Default select example" value={answerKey} onChange={(e) => {
                            setanswerKey(e.target.value);
                        }}>
                            {keyArray.map((ele) => {
                                return <option key={ele} value={ele}>{ele} </option>
                            })}
                        </select>
                    </div>
                    <button className='btn btn-primary col-3 my-2' onClick={() => {
                        if (encrypt(answerPlainText, answerKey) === encrypt(sentenceKeyPairs[Index].sentence, sentenceKeyPairs[Index].key)) {
                            notifySuccess();
                        }
                        else {
                            notifyDanger();
                        }
                    }}>Verify my answer </button>

                </div>
            </div>
        </div>
    )
}

export default Simulation