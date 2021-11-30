

import Year from '../../component/fields/Year'
import Course from '../../component/fields/Course'
import Input from '../../component/fields/Input'
import Select from '../../component/fields/Select'
import Flex from '../../component/elements/Flex'
import Box from '../../component/Box'
import Div from '../../component/Div'
import ProfileImg from '../../component/ProfileImg'
import Names from '../../component/fields/Names'
import Caption from '../../component/Caption'
import BreadCrams from '../../component/BreadCrams'

export default function StuAdd() {

    return (
        <div className='StuAdd p20 flxC flx1 itemCenter '>

            <Div flx1 w100per mxw900>
                <form action="" >

                    <BreadCrams path='Teacher / add' >Add Teacher</BreadCrams>

                    <Caption>Primary Info</Caption>

                    <Box p20>
                        <br />
                        <Flex p20>

                            <ProfileImg />
                            <div>

                                {/* <button>upload file</button> */}
                            </div>
                        </Flex>
                        <Names />
                        <Flex wrap>
                            <Input className='mxw100' label='age'></Input>
                            <Input className='mxw100' label='gender'></Input>
                            <Input label='Date Of Birth'></Input>
                            <Input label='Place Of Birth'></Input>
                        </Flex>
                    </Box>


                    <Caption>Contact</Caption>
                    <Box flx wrap plr20>
                        <Input label='mobile Number'></Input>
                        <Input label='Email'></Input>
                        <Input label='Telephone'></Input>
                    </Box>

                    <Caption>Current Address</Caption>
                    <Box flx wrap plr20>
                        <Input label='house Number'></Input>
                        <Input label='street'></Input>
                        <Input label='city'></Input>
                        <Input label='zip code'></Input>
                    </Box>
                </form>
            </Div>
        </div>
    )
}