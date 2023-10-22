import React from 'react'

const Procedure = () => {
    return (
        <div>
            <div>
                <h2 className='text-center my-4' style={{
                    fontFamily: 'Adobe Fan Heiti Std B',
                    color: 'skyblue',
                    borderBottom: '1px solid gray',
                    paddingBottom: '4px',
                }}>Procedure</h2>
                <h2>Step 1: Decryption with Different Keys</h2>
                <p>For the given ciphertext in Part I of the simulation page, decrypt it using each of the twenty-six different keys, k = 0, 1, 2, ..., 25. Shift the letters in the ciphertext by the respective key value to obtain the corresponding plaintexts. Use the decryption tool in Part III of the simulation page for this.</p>

                <h2>Step 2: Recording Plaintexts</h2>
                <p>After each decryption, cut and paste the resultant plaintext into the scratchpad provided in Part II of the simulation page. This is useful for remembering the decrypted text for comparison later.</p>

                <h2>Step 3: Identifying Meaningful Plaintext</h2>
                <p>Observe all the decrypted plaintexts and choose the most appropriate one that appears to be meaningful English text. This is the potential recovered plaintext. Cut and paste this meaningful plaintext into the text-field named "PART IV Solution Plaintext" on the simulation page. Select the corresponding key (from 0 to 25) that you used to decrypt the ciphertext in the text-field named "Key."</p>

                <h2>Step 4 [Optional]: Verification</h2>
                <p>Optionally, verify that your answer is correct by encrypting the solution plaintext using the key you identified in Step 3. If the encrypted result matches the original ciphertext provided in Part I, you can be more confident that your answer is correct.</p>
            </div>
        </div>
    )
}

export default Procedure