

export default function Div(props) {
    let classes = Object.keys(props).join(' ')
    return <div  {...props} className={classes}>
        {props.children}
    </div>
}