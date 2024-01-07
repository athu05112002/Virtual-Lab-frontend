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
    let cipherText = '';
    let plainText = props.Plaintext;
    if (plainText.length % 2 === 1) {
        plainText += 'x';
    }
    const findChar = (c, matrixArray) => {
        console.log('inside findChar', c);
        for (let i = 0; i < matrixArray.length; i++) {
            for (let j = 0; j < matrixArray[i].length; j++) {
                if (c === matrixArray[i][j]) {
                    return { i, j };
                }
            }
        }
        return { i: 0, j: 0 };
    }
    plainText = plainText.toUpperCase();
    for (let i = 0; i < plainText.length; i++) {
        let c1 = plainText[i] + '';
        let c2 = plainText[i + 1] + '';
        let result1 = findChar(c1, matrixArray);
        let result2 = findChar(c2, matrixArray);
        // let { i1, j1 } = result1;
        // let { i2, j2 } = result2;
        let i1 = result1.i, j1 = result1.j;
        let i2 = result2.i, j2 = result2.j;
        let newi1 = i1, newj1 = j1;
        let newi2 = i2, newj2 = j2;
        if (i1 === i2) {
            newi1 = i1;
            newi2 = i2;
            newj1 = (j1 + 1) % 8;
            newj2 = (j2 + 1) % 8;
        }
        else if (j1 === j2) {
            newj1 = j1;
            newj2 = j2;
            newi1 = (i1 + 1) % 8;
            newi2 = (i2 + 1) % 8;
        }
        else {
            newi1 = i1;
            newj1 = j2;
            newi2 = i2;
            newj2 = j1;
        }
        cipherText += matrixArray[newi1][newj1];
        cipherText += matrixArray[newi2][newj2];
        i++;
    }
    console.log(cipherText);
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