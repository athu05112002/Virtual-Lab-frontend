import React from 'react'

const Procedure = () => {
    return (
        <div>
            <h2 className='text-center my-4' style={{
                fontFamily: 'Adobe Fan Heiti Std B',
                color: 'skyblue',
                borderBottom: '1px solid gray',
                paddingBottom: '4px',
            }}>Procedure</h2>

            <div style={{
                fontSize: '1.2rem',
            }}>

                <li><strong>Step 1:</strong>  Select a plain text and a key by clicking on the Next buttons next to the respective fields.</li>

                <li><strong>Step 2:</strong>  If the generated key is biased, make it unbiased in 0 and 1, and use it. You can use the idea given in the theory part.</li>

                <li><strong>Step 3:</strong>  On clicking on "Encrypt" button, you will get the ciphertext for the same encryption scheme. You can get the ciphertext for as many plaintext and key pairs as you like for the encryption scheme.</li>

                <li><strong>Step 4:</strong>  You can take a look at all the possible 2^(length of plaintext + length of key) tuples of plaintext, key and ciphertext in the next block.</li>

                <li><strong>Step 5:</strong> By observing the tuples obtained above, you need to tell if the encryption scheme being used is secure or not. If not, you need to find the message, m and ciphertext, c such that P(M=m|C=c) = P(M=m). In the experiment the size of the message space and that of the key space are equal. Thus from Shannon's theorem, to show that a scheme is not perfect, it is enough if you locate two distinct plaintexts that are encrypted to obtain the same ciphertext for the same key.</li>
            </div>
        </div>
    )
}

export default Procedure