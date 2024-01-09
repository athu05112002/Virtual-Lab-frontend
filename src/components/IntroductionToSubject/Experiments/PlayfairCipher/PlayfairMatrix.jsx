import React, { useEffect, useState } from 'react'

const PlayfairMatrix = (props) => {


    let keyword = props.keyword.toUpperCase();
    const createPlayfairMatrix = (keyword) => {
        let matrixVal = '';
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
        return matrixArray;
    }
    const [matrixArray, setMatrixArray] = useState([]);
    let plainText = props.Plaintext;
    const findChar = (c, matrixArray) => {
        for (let i = 0; i < matrixArray.length; i++) {
            for (let j = 0; j < matrixArray[i].length; j++) {
                if (c === matrixArray[i][j]) {
                    return { i, j };
                }
            }
        }
        return { i: 0, j: 0 };
    }
    const { setCiphertext, setPlaintext, Ciphertext } = props;
    const encryptPlainText = (Plaintext, matrixArray, findChar) => {
        const removeSpaceAndMakeEven = (text) => {
            let ans = '';
            text = text.toUpperCase();
            for (let i = 0; i < text.length; i++) {
                ans += text[i];
                if (text[i] === text[i + 1]) {
                    ans += '#';
                }
            }
            if ((ans.length) % 2 === 1) {
                ans += '#';
            }
            return ans;
        }
        let plainText = removeSpaceAndMakeEven(Plaintext);
        let newcipherText = '';
        for (let i = 0; i < plainText.length; i++) {
            let c1 = plainText[i] + '';
            let c2 = plainText[i + 1] + '';
            let result1 = findChar(c1, matrixArray);
            let result2 = findChar(c2, matrixArray);
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
            newcipherText += matrixArray[newi1][newj1];
            newcipherText += matrixArray[newi2][newj2];
            i++;
        }
        return newcipherText;
    }
    const decryptPlainText = (cipherText, matrixArray, findChar) => {
        let newplaintext = '';
        for (let i = 0; i < cipherText.length; i++) {
            let c1 = cipherText[i] + '';
            let c2 = cipherText[i + 1] + '';
            let result1 = findChar(c1, matrixArray);
            let result2 = findChar(c2, matrixArray);
            let i1 = result1.i, j1 = result1.j;
            let i2 = result2.i, j2 = result2.j;
            let newi1 = i1, newj1 = j1;
            let newi2 = i2, newj2 = j2;
            console.log(c1 + ' c1 is  ' + result1.i + ' ' + result1.j);
            console.log(c2 + ' c2 is  ' + result2);
            if (i1 === i2) {
                newi1 = i1;
                newi2 = i2;
                newj1 = (j1 - 1) >= 0 ? (j1 - 1) : 7;
                newj2 = (j2 - 1) >= 0 ? (j2 - 1) : 7;
            }
            else if (j1 === j2) {
                newj1 = j1;
                newj2 = j2;
                newi1 = (i1 - 1) >= 0 ? (i1 - 1) : 7;
                newi2 = (i2 - 1) >= 0 ? (i2 - 1) : 7;
            }
            else {
                newi1 = i1;
                newj1 = j2;
                newi2 = i2;
                newj2 = j1;
            }
            newplaintext += matrixArray[newi1][newj1];
            newplaintext += matrixArray[newi2][newj2];
            i++;
        }
        return newplaintext;
    };
    useEffect(() => {
        setMatrixArray(createPlayfairMatrix(keyword));
    }, [keyword]);
    return (
        <div>
            <button className='btn btn-primary' type="button" onClick={(e) => {
                let encryptedText = encryptPlainText(plainText, matrixArray, findChar)
                console.log('here is ' + encryptedText);
                setCiphertext(encryptedText);
            }}>Encrypt<i className="fa-solid fa-arrow-down mx-2"></i></button>
            <div class="mb-3">
                <label htmlFor="plain-text" class="form-label">Cipher text</label>
                <textarea class="form-control" id="plain-text" rows="3" placeholder='Enter your cipher text to be deciphered' onChange={(e) => {
                    setCiphertext(e.target.value);
                }} value={Ciphertext}></textarea>
            </div>
            <button className='btn btn-primary' type="button" onClick={(e) => {
                let decryptedText = decryptPlainText(Ciphertext, matrixArray, findChar)
                console.log('here is ' + decryptedText);
                setPlaintext(decryptedText);
            }}>Decrypt<i className="fa-solid fa-arrow-up mx-2"></i></button>

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

        </div>
    )
}

export default PlayfairMatrix