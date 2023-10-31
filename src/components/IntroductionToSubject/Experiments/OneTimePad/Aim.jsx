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
                Here we see a perfectly
                secure cryptosystem which was
                developed by Gilbert Vernam in 1918.
                Vernam sees a trade off between security
                and convenience, and the trade-off has
                to do with the length of the key tape
                as its security depends on the fact
                that the key is used only once.

                <h4 className='my-4' style={{
                    fontFamily: 'Adobe Fan Heiti Std B',
                    paddingBottom: '4px',
                }}>About the the Experiment:</h4>

                The main idea is to realize that any perfectly secure encryption scheme (and not just the One-Time Pad) requires the keyspace to be at least as large as the message space, and is therefore impractical
            </p>
        </div>

    )
}

export default Aim