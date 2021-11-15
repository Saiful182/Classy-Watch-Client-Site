import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import './notfound.css';

import ReactiveButton from 'reactive-button';
const Notfound = () => {
    const [state, setState] = useState('idle');
    const history = useHistory();
    const onClickHandler = () => {

        setState('loading');
        setTimeout(() => {
            setState('success');
            history.push('/');
        }, 2000);

    }
    return (
        <div className="error-container">

            <ReactiveButton
                className="error-button"
                buttonState={state}
                onClick={onClickHandler}
                value="Go Back"
                style={
                    {
                        borderRadius: '10px',
                        color: 'blue',
                        backgroundColor: 'white'
                    }}
            />



        </div>
    );
};

export default Notfound;