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



            <ol style={{
                fontFamily: 'Adobe Fangsong Std R',
                textAlign: 'justify'
            }}>
                <li className='fw-semibold m-2'>Begin with a keyword containing all unique letters of the alphabet and any additional characters needed.</li>
                <li className='fw-semibold m-2'>Arrange the keyword characters in an 8x8 grid, omitting duplicates.</li>
                <li className='fw-semibold m-2'>Fill the remaining cells with the unused letters of the alphabet in order, avoiding duplication of letters from the keyword.</li>
                <li className='fw-semibold m-2'>Consider treating 'I' and 'J' as the same letter and placing them in a single cell.</li>
                <li className='fw-semibold m-2'>The resulting 8x8 grid becomes the Playfair matrix for encryption and decryption.</li>
                <li className='fw-semibold m-2'>Ensure that the matrix is read row by row during both encryption and decryption processes.</li>
                <li className='fw-semibold m-2'>Apply any specific conventions or modifications required by your implementation.</li>
            </ol>

        </div>
    )
}

export default Procedure