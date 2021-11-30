
export default function Input(props) {
    return <span className='flxC textLeft mxw150'>
        {
            props?.label && <label className=' ml5' htmlFor={props?.name} {...props.label?.props}>{props?.label}</label>
        }
        <input {...props} name='firstName' type="text" />
    </span>
}