import React from 'react'

const PlayfairMatrix = (props) => {

    let matrixVal = '';
    let keyword = props.keyword.toUpperCase();
    console.log('kkeyword is ', keyword);
    let myMap = new Map();

    for (let i = 0; i < keyword.length; i++) {

        if (myMap.has(keyword[i])) {
            continue;
        }
        else {
            matrixVal += keyword[i];
            myMap.set(keyword[i], 1);
        }
    }
    for (let i = 33; i <= 96; i++) {
        let c = String.fromCharCode(i)[0];
        console.log(c);
        if (myMap.has(c)) {
            continue;
        }
        else {
            matrixVal += c;
            myMap.set(c, 1);
        }
    }
    console.log('matrix val is ', matrixVal);
    let matrixArray = [];
    let curr = [];
    for (let i = 0; i < matrixVal.length; i++) {
        if (curr.length < 8) {
            curr.push(matrixVal[i]);
        }
        else {
            matrixArray.push(curr);
            curr = [];
            i--;
        }

    }
    console.log(matrixVal.length)
    matrixArray.push(curr);
    curr = '';
    console.log(matrixArray);
    return (
        <div className='container text-center border-2 border-black' style={{
            border: '1px solid black',
            borderRadius: '5px',
            width: '30%',
        }} >
            {
                matrixArray.map((curr) => {
                    return <div className='row'>
                        {curr.map((ele) => {
                            return <div className='col text-center' style={{
                                borderRight: '1px solid black',
                                borderBottom: '1px solid black',
                            }}>{ele}</div>
                        })}
                    </div>
                })
            }
        </div>
    )
}

export default PlayfairMatrix