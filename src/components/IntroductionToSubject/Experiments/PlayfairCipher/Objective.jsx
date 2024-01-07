import React from 'react'

const Objective = () => {
    return (
        <div className='container'>
            <h2 className='text-center my-4' style={{
                fontFamily: 'Adobe Fan Heiti Std B',
                color: 'skyblue',
                borderBottom: '1px solid gray',
                paddingBottom: '4px',
            }}>Objective</h2>
            <p style={{
                fontFamily: 'Adobe Fangsong Std R',
                textAlign: 'justify'
            }}>
                The virtual lab aims to facilitate an immersive learning experience for
                the Playfair Cipher algorithm. Users will grasp fundamental concepts while
                interactively crafting key tables. The platform offers a seamless interface
                for encrypting and decrypting messages, addressing special cases like repeated
                letters. User-friendly error handling and real-time feedback enhance the
                learning process. Educational resources, including tooltips and hints,
                contribute to a comprehensive understanding.
                Security insights delve into the cipher's historical significance and its
                relevance in modern cryptography. Gamification elements are seamlessly integrated,
                ensuring an interactive and enriching exploration of the Playfair Cipher.
            </p>

        </div>
    )
}

export default Objective