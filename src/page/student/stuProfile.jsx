import ProfileImg from "../../component/ProfileImg"
import BreadCrams from "../../component/BreadCrams"
import Box from "../../component/Box"
import Div from "../../component/Div"
import { TextH2 } from "../../component/Text"
import { TextH3 } from "../../component/Text"

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
                    <ProfileImg />
                    <br />
                    <Div>
                        <span className='flx ptb10'>
                            <Role className='textLeft '>admin</Role>
                        </span>
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

                        <br />

                    </Div>
                </Box>
            </div>

        </div>
    )
}