import React from 'react'

const Theory = () => {
    return (
        <div>
            <h2 className='text-center my-4' style={{
                fontFamily: 'Adobe Fan Heiti Std B',
                color: 'skyblue',
                borderBottom: '1px solid gray',
                paddingBottom: '4px',
            }}>Theory</h2>
            <ul>
                <li>Perfect Secrecy: The Vernam Cipher, or One-Time Pad, guarantees perfect secrecy when used correctly.</li>
                <li>Key: A key (one-time pad) as long as the message, composed of truly random bits.</li>
                <li>Encryption: XOR plaintext and the one-time pad to produce ciphertext.</li>
                <li>Key Usage: Never reuse the one-time pad to maintain security.</li>
                <li>Unbreakable Security: Properly used, the system is impervious to decryption due to the random keys and XOR operation.</li>
            </ul>


            <h4 className='my-4' style={{
                fontFamily: 'Adobe Fan Heiti Std B',
                paddingBottom: '4px',
            }}>Example:</h4>
            <ul>
                <li>One-time pad: 0101</li>
                <li>Plaintext: 1010</li>
                <li>Ciphertext: 1111</li>
            </ul>

            <p>In this example, XORing the one-time pad with the plaintext results in the ciphertext "1111." The security of the system depends on using unique, random keys for each message.</p>
        </div>
    )
}

export default Theory