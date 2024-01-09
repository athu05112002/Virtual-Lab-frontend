import React from 'react'

const Theory = () => {
    return (
        <div className='container'>
            <h2 className='text-center my-4' style={{
                fontFamily: 'Adobe Fan Heiti Std B',
                color: 'skyblue',
                borderBottom: '1px solid gray',
                paddingBottom: '4px',
            }}>Theory</h2>
            <p style={{
                fontFamily: 'Adobe Fangsong Std R',
                textAlign: 'justify'
            }}>
                The Playfair cipher is a classical symmetric encryption technique
                that operates on pairs of letters (digraphs) within a plaintext.
                Introduced by Charles Wheatstone in 1854 and later promoted by Lyon
                Playfair, the method employs a key-based 5x5 matrix, traditionally filled
                with letters of the alphabet, excluding 'J' (with 'I' representing both).
                The matrix is generated based on a keyword, with the remaining letters
                filling the grid in a specific order. During encryption, each digraph
                in the plaintext is substituted with specific rules: if the letters are
                in the same row, they are replaced with the letters to their immediate
                right, if in the same column, with the letters immediately below. If
                the letters form a rectangle, they are replaced by the letters at the
                opposing corners of the rectangle. The Playfair cipher is known for
                its resistance to simple frequency analysis and its ability to handle
                digraphs efficiently. Despite its historical significance, it is no
                longer widely used due to vulnerabilities and the advent of more
                secure modern encryption algorithms.
            </p>

        </div>
    )
}

export default Theory