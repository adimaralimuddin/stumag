

export function TextH2(props) {
    return <span className='textLeft flexC ml20'>
        <h2>{props.children}</h2>
        {
            props?.label && <small>{props?.label}</small>
        }
    </span>
}
export function TextH3(props) {
    return <span className='textLeft flexC ml20'>
        <h3>{props.children}</h3>
        {
            props?.label && <small>{props?.label}</small>
        }
    </span>
}