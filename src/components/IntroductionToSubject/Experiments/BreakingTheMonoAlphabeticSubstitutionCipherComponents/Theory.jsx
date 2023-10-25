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
            <h2>Mono-Alphabetic Substitution Cipher</h2>
            <p>The mono-alphabetic substitution cipher is a classical encryption technique in which each letter in the plaintext is replaced with a corresponding letter from a fixed substitution key. This type of cipher uses a one-to-one mapping between the characters of the plaintext and the ciphertext. The key is essentially a rearrangement of the standard alphabet.</p>

            <h2>Cryptanalysis</h2>
            <p>One of the fundamental vulnerabilities of the mono-alphabetic substitution cipher is that it preserves the frequency of character occurrence from the plaintext to the ciphertext. This characteristic makes it susceptible to cryptanalysis.</p>

            <h3>Frequency Analysis</h3>
            <p>Frequency analysis is a powerful technique for breaking mono-alphabetic substitution ciphers. It capitalizes on the fact that in any given language, certain letters occur more frequently than others. In English, for example, the letter 'e' is the most common. By analyzing the frequency of characters in the ciphertext, cryptanalysts can make educated guesses about the substitutions and gradually decipher the entire message.</p>

            <p>In our experiment, we will employ frequency analysis to decrypt a mono-alphabetic substitution cipher. We will analyze the ciphertext, identify the most frequently occurring characters, and use this information to deduce the corresponding substitutions in the key. This process ultimately allows us to recover the plaintext and unveil the secret key used for encryption.</p>

            <h2>Conclusion</h2>
            <p>The mono-alphabetic substitution cipher, while conceptually simple, highlights the importance of robust encryption methods and the need for large key spaces to ensure data security. Through this experiment, we will gain insights into both the vulnerability of this cipher and the power of frequency analysis in breaking it.</p>
        </div>
    )
}

export default Theory