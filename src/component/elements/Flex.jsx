

export default function Flex(props) {
    let classes = Object.keys(props).join(' ') + ' flx'
    return <div  {...props} className={classes}>
        {props.children}
    </div>
}