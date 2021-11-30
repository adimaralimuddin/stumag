import Input from "../../../component/fields/Input"



export default function Query() {
    return (
        <div className='flx white p5 br shadow1 wrap'>
            <Input className='mxw100 mnw60' name='acro' label='acro'></Input>
            <Input className='flx1 mnw150' name='title' label='title'></Input>
            <Input className='flx1 mxw70 mnw40' name='year' label='year'></Input>
            <Input className='flx1 mnw100' name='discription' label='discription'></Input>
        </div>
    )
}