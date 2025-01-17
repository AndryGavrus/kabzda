import React, { ChangeEvent, useRef, useState } from 'react'

export const GetValueOfUncontrolledInputByButtonPress = () => {
    let [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () =>{
        const el = inputRef.current as HTMLInputElement
        setValue(el?.value)
    }
    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={save}>Save</button>
            - {value}
        </div>
    )
}

