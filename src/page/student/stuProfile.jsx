import ProfileImg from "../../component/ProfileImg"
import BreadCrams from "../../component/BreadCrams"
import Box from "../../component/Box"
import Div from "../../component/Div"
import { TextH2 } from "../../component/Text"
import { TextH3 } from "../../component/Text"
import Flex from "../../component/elements/Flex"

export function Role(props) {
    let cls = props?.className + ' role-' + props?.children
    console.log(cls)
    return <p {...props} className={cls}>{props.children}</p>
}

export default function StuProfile() {
    const mxw = 'mxw900'
    return (
        <div className='stuProfile p20 flxC flx1 itemCenter '>

            <div className={` w100per ${mxw}`}>
                <BreadCrams path='student / mike jophen l'>Modify</BreadCrams>
                <br />
                <Box flx plr10per itemCenter wrap>
                    <br />
                    <span className='flxC itemLeft ptb10'>
                        <Role className='textLeft absolute flx itemCenter'>admin</Role>
                        <ProfileImg />
                    </span>
                    <Div>
                        <span className='flx wrap'>
                            <TextH2 label='First Name'>mike </TextH2>
                            <TextH2 label='Last Name'>jophen </TextH2>
                            <TextH2 label='Middle Name'>l </TextH2>
                        </span>

                        <br />

                        <span className='flx'>
                            <TextH3 label='course'>BSIT</TextH3>
                            <TextH3 label='year'>2 year</TextH3>
                        </span>

                        <Flex wrap>
                            <TextH3 label='age'>20</TextH3>
                            <TextH3 label='gender'>male</TextH3>
                            <TextH3 label='status'>single</TextH3>
                        </Flex>

                        <br />

                    </Div>
                </Box>
                <br />
                <p>Contact / Address</p>
                <br />
                <Box>
                    <Flex>
                        <TextH3 label='contact'>0978452387</TextH3>
                        <TextH3 label='email'>robert@gmail.com</TextH3>
                        <TextH3 label='current address'>lamiun, bongao, tawi tawi</TextH3>
                    </Flex>
                </Box>
                <br />
                <p>Tuition</p>
                <br />
                <Box>
                    <Flex wrap>
                        <TextH3 label='tuition fee'>23,00</TextH3>
                        <TextH3 label='balanced'>10,500</TextH3>
                        <TextH3 label='paid'>15,500</TextH3>
                        <TextH3 label='back account'>0</TextH3>
                    </Flex>
                </Box>
            </div>

        </div>
    )
}