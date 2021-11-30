// import Div from "../Div"
import Input from "./Input"


export default function Names() {
    return <div className='flx wrap'>

        <Input
            className='flx1 mnw200'
            name='firstName'
            label='firs tName'
        />

        <Input
            className='flx1 mnw200'
            name='lastName'
            label='last Name'
        />

        <Input
            className='  '
            name='middleName' label='middle Name'
        />
    </div>
}