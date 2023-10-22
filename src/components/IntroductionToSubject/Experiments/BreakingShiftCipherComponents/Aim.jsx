import React from 'react'

const Aim = () => {
    return (
        <div className='container'>
            <h2 className='text-center my-4' style={{
                fontFamily: 'Adobe Fan Heiti Std B',
                color: 'skyblue',
                borderBottom: '1px solid gray',
                paddingBottom: '4px',
            }}>Aim</h2>
            <p style={{
                fontFamily: 'Adobe Fangsong Std R'
            }}>
                The primary objective of this experiment is to
                illustrate the inherent vulnerabilities of the
                shift cipher, a classic encryption scheme characterized
                by its remarkably small key space. By decrypting a provided
                ciphertext to unveil the plaintext and the secret key
                , this experiment seeks to impart a deeper understanding
                of the weaknesses associated with such encryption methods.
                Through this endeavor, participants will gain practical
                insights into the importance of key space size in the
                context of encryption, thus underscoring the fundamental
                principle of safeguarding data against attacks and highlighting
                the historical significance of the shift cipher as a valuable
                case study in cryptanalysis.
            </p>

        </div>
    )
}

export default Aim