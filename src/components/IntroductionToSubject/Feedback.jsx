import React from 'react'

const Feedback = () => {
    return (
        <div className='container'>
            <h2 className='text-center my-4' style={{
                fontFamily: 'Adobe Fan Heiti Std B',
                fontWeight: 'bold',
                color: 'skyblue'
            }}>Feedback</h2>
            <div style={{
                fontFamily: 'Adobe Fangsong Std R'
            }}>
                <p>Dear User,</p>
                <p>Thank you for being a part of our Virtual Lab community. We highly value your feedback, as it helps us enhance your experience. To assist us in this endeavor, we kindly request a few moments of your time to answer a few questions. Your insights, which will take just 3 minutes, will contribute to making our Virtual Lab even more valuable for you and our fellow users.</p>
                <p>Sincerely,</p>
                <p>The virtualLab</p>
                <button className='btn btn-outline-secondary' onClick={() => {

                }}><a href="mailto:acoolkarni48@gmail.com?subject=Feedback%20regarding%20virtual%20lab%20" style={{
                    textDecoration: 'none',
                    color: 'inherit'
                }}>Click here to submit your feedback </a></button>
            </div>

        </div>

    )
}

export default Feedback