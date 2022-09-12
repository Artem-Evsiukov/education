import React, {useState} from 'react';

type OnPropsType = {
    onChage: (on : boolean)=> void

}


export const ButtonOn = (props: OnPropsType) => {

    let [on, setOn] = useState(false)

    const onStyle = {
        backgroundColor: on ? 'green' : 'white',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: "5px"
    }
    const offStyle = {
        backgroundColor: on ? 'white' : 'red',
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
        backgroundColor: on ? 'green' : 'red',
    }

    const onCliked = () => {
        setOn(true)
        props.onChage(true)
    }
    const offCliked = () => {
        setOn(false)
        props.onChage(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={ onCliked}>On</div>
            <div style={offStyle} onClick={ offCliked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );


};
