
export default function Select(props) {
    return <span className='flxC textLeft m5 select-span flx1'>
        {
            props?.label && <label className='ml5' htmlFor={props?.name}>{props?.label}</label>
        }
        <select {...props} name={props?.name} id="">
            {props.children}
        </select>
    </span>
}