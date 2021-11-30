
export default function Input(props) {
    return <span className={'flxC textLeft flx1 m5 ' + props?.className}>
        {
            props?.label && <label className=' ml5' htmlFor={props?.name} {...props.label?.props}>{props?.label}</label>
        }
        <input type="text" {...props} name='firstName' placeholder={props?.label} />
    </span>
}