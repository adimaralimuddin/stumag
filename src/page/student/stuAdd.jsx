

import Year from '../../component/fields/Year'
import Course from '../../component/fields/Course'
import Input from '../../component/fields/Input'

export default function StuAdd() {

    const spanStyle = 'flxC mxw150 textLeft'
    return (
        <div className='StuAdd p20 flxC flx1 itemCenter'>

            <div className='white p10 br10 w100per mxw900 shadow1'>
                <form className=' p20 br10' action="" >

                    {/* name fields start */}
                    <div className="flx wrap">

                        <Input
                            name='firstName'
                            label='firs tName'
                        />

                        <Input
                            name='lastName'
                            label='last Name'
                        />

                        <Input
                            name='middleName' label='middle Name'
                        />

                    </div> {/* name fields end  */}

                    <div className="flx wrap">
                        <Course />
                        <Year />

                    </div>

                </form>
            </div>
        </div>
    )
}