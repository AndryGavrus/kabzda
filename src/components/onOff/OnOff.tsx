
type OnOffPropsType = {
    on: boolean
    onClick: ( on: boolean) => void
}

const OnOff = (props: OnOffPropsType) => {
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white'
    }

    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red'
    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    const turnOn = () => { props.onClick(true) }
    const turnOff = () => { props.onClick(false) }

    return (
        <div>
            <div style={onStyle} onClick={turnOn}>On</div>
            <div style={offStyle} onClick={turnOff}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff
