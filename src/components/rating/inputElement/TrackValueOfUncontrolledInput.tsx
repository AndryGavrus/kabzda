import React, { ChangeEvent, useState } from 'react'

export const TrackValueOfUncontrolledInput = () => {
    let [value, setValue] = useState('')
    const OnChange = (event:ChangeEvent<HTMLInputElement>) =>{
        setValue(event?.currentTarget.value)
    }
    return (
        <div>
            <input onChange={OnChange}/> - {value}
        </div>
    )
}

