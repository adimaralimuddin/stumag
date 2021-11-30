

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

                    <BreadCrams path='Student / add' >Add Student</BreadCrams>

                    <Caption>Primary Info</Caption>

                    <Box p20>
                        <br />
                        <ProfileImg />
                        <Names />
                        <Flex>
                            <Course />
                            <Year />

                        </Flex>
                        <br />
                    </Box>

                    <Caption>Tuition</Caption>
                    <Box wrap flx plr20>
                        <Input label='Tuition Fee'></Input>
                        <Input label='Balanced'></Input>
                        <Input label='Paied'></Input>
                        <Input label='Back Account'></Input>
                    </Box>

                    <Caption>Contact</Caption>
                    <Box flx wrap plr20>
                        <Input label='mobile Number'></Input>
                        <Input label='Email'></Input>
                        <Input label='Telephone'></Input>
                    </Box>
                </form>
            </Div>
        </div>
    )
}