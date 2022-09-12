import React, {useState} from 'react';

type OnPropsType = {
     on: boolean
    onChange:(on:boolean) => void
}


export const ButtonOnControled = (props: OnPropsType) => {

    const onStyle = {
        backgroundColor: props.on ? 'green' : 'white',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: "5px"
    }
    const offStyle = {
        backgroundColor: props.on ? 'white' : 'red',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: "5px"
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red',
    }

    return (
        <div>
            <div style={onStyle} onClick={ () => { props.onChange(true) } }>On</div>
            <div style={offStyle} onClick={ () => { props.onChange(false) } }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );


};
