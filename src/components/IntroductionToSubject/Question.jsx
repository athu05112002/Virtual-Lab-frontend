import React from 'react'

const Question = (props) => {
    const { Sno, question, options, setSelectedOptions } = props;

    return (

        <div>
            <p>
                {Sno}. {question}
            </p>
            <ul>

                {options.map((ele, idx) => {
                    return (
                        <div key={idx} className="form-check">
                            <input className="form-check-input" type="radio" name={Sno} id={Sno + ele} onClick={() => {
                                setSelectedOptions((prev) => {
                                    const updatedOptions = [...prev];
                                    updatedOptions[Sno - 1] = idx + 1;
                                    return updatedOptions;
                                })
                            }} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                {idx + 1}. {ele}
                            </label>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Question