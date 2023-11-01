import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Feedback = () => {
    const happinessRating = ['😢', '😐', '😊', '😃', '😄'];
    const notifySuccess = () => {
        toast.success('😊 thanks for your feedback we will surely try to improve on your feedback!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };
    const handleClick = (item) => {
        for (let i = 0; i < happinessRating.length; i++) {
            let ele = document.getElementById(happinessRating[i]);
            ele.style.fontSize = '2rem';
        }
        let curr = document.getElementById(item);
        curr.style.fontSize = '4rem';
        curr.style.transition = 'font-size 0.3s';
        console.log(curr);
    }
    const [textArea, settextArea] = useState('');

    return (
        <div className='w-100'>
            <ToastContainer />
            <h2 className='text-center my-4' style={{
                fontFamily: 'Adobe Fan Heiti Std B',
                color: 'skyblue',
                borderBottom: '1px solid gray',
                paddingBottom: '4px',
            }}>Feedback</h2>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Please provide us with your feedback </label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={textArea} onChange={(e) => {
                    settextArea(e.target.value);
                }}></textarea>
                <button className='btn btn-primary m-2' data-bs-toggle="modal" data-bs-target="#rateStars">Submit</button>
            </div>
            <div class="modal fade" id="rateStars" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Rate your experience</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body d-flex align-items-center justify-content-center g-3">
                            {happinessRating.map((ele, idx) => {
                                return (<div className='m-2' id={ele} key={idx} onClick={(e) => {
                                    handleClick(ele);
                                }} style={{
                                    fontSize: '2rem',
                                }}> {ele}</div>)
                            })}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={(e) => {
                                notifySuccess();
                            }}>Submit feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback