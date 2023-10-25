import React from 'react'

const Aim = () => {
    return (

        <div>
            <h2 className='text-center my-4' style={{
                fontFamily: 'Adobe Fan Heiti Std B',
                color: 'skyblue',
                borderBottom: '1px solid gray',
                paddingBottom: '4px',
            }}>Aim of the Experiment:</h2>
            <p>
                The aim of this experiment is to showcase the susceptibility of
                the mono-alphabetic substitution cipher, despite its extensive key space.
                Through the utilization of frequency analysis methods, the objective is
                to decrypt a given ciphertext, unveil the corresponding plaintext message,
                and reveal the secret key. This experiment emphasizes the significance of
                not only possessing a large key space but also the necessity for robust
                encryption techniques to ensure the security of data.
            </p>
        </div>

    )
}

export default Aim