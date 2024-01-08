import React, { useState } from 'react'
import PlayfairMatrix from './PlayfairMatrix'

const Simulation = () => {
    const [Plaintext, setPlaintext] = useState('');
    const [Keyword, setKeyword] = useState('keyword');
    const [Ciphertext, setCiphertext] = useState('');


    return (

        <div className='container'>
            <div class="mb-3">
                <label for="plain-text" class="form-label">Plain text</label>
                <textarea class="form-control" id="plain-text" rows="3" placeholder='Enter your plain text to encrypted here' onChange={(e) => {
                    setPlaintext(e.target.value);
                }} value={Plaintext}></textarea>
            </div>
            <div class="mb-3">
                <label for="encryption-key" class="form-label">Encryption key</label>
                <input type="text" class="form-control" id="encryption-key" placeholder="Enter your key for encryption here" onChange={(e) => {
                    setKeyword(e.target.value);
                    console.log(Keyword);
                }} value={Keyword} />
            </div>
            <PlayfairMatrix keyword={Keyword}
                Plaintext={Plaintext}
                setCiphertext={setCiphertext}
                setPlaintext={setPlaintext}
                Ciphertext={Ciphertext}
            />
        </div>
    )
}

export default Simulation