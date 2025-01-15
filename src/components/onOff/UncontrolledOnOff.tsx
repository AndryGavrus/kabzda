import React, { useState } from 'react'

const UncontrolledOnOff = () => {
    let [on, setOn]  = useState(false)
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on? 'green' : 'white'
    }

    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on? 'white' : 'red'
    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: on? 'green' : 'red'
    }

    const turnOn = () => {setOn(true) }
    const turnOff = () => {setOn (false) }

    return (
        <div>
            <div style={onStyle} onClick={turnOn}>On</div>
            <div style={offStyle} onClick={turnOff}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default UncontrolledOnOff
