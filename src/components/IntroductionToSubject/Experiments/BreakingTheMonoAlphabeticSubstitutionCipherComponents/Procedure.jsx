import React from 'react'

const Procedure = () => {
    return (
        <div>'
            <div>
                <h2 className='text-center my-4' style={{
                    fontFamily: 'Adobe Fan Heiti Std B',
                    color: 'skyblue',
                    borderBottom: '1px solid gray',
                    paddingBottom: '4px',
                }}>Procedure</h2>

                <ol>
                    <li><strong>Generating Ciphertext:</strong> In PART I of the experiment page, click on the "Next CipherText" button to generate a ciphertext.</li>
                    <li><strong>Calculating Frequencies:</strong> In PART I, calculate the frequencies of the generated ciphertext by clicking on the "Calculate Frequencies in Ciphertext" button.</li>
                    <li><strong>Preparing Scratchpad:</strong> Copy the generated ciphertext from PART I. Paste the copied ciphertext into the "Scratchpad" area of PART II.</li>
                    <li><strong>Analyzing Frequencies:</strong> In PART II, analyze the similarities between the "Calculated Frequencies Table" and the "English Alphabet Frequencies Table."</li>
                    <li><strong>Frequency-Based Estimation:</strong> Based on the observed similarities in step 4, make a frequency-based estimation for each character of the ciphertext.</li>
                    <li><strong>Character Replacement:</strong> In PART II, replace characters of the ciphertext in the Scratchpad with the characters estimated in step 5. Use the "Modify" function.</li>
                    <li><strong>Refining the Decryption:</strong> Based on hints and patterns in the ciphertext in the "Scratchpad" area, continue making more character replacements.</li>
                    <li><strong>Iterative Decryption:</strong> Repeat step 7 iteratively until you obtain a meaningful English text in the Scratchpad.</li>
                    <li><strong>Observing and Recording Deciphered Text:</strong> In PART II, observe the deciphered plaintext in the Scratchpad area. If you have formed a meaningful English text, cut-and-paste it in the text-field named "Solution Plaintext" in PART III. Enter the final character mapping in the "Solution Key" in PART III. Click on the "Check Answer" button to verify your solution.</li>
                    <li><strong>Verification (Optional):</strong> In PART IV, you have the option to verify the correctness of your answer. Encrypt the solution plaintext with the key you obtained in PART III.</li>
                </ol>
            </div>
        </div>
    )
}

export default Procedure