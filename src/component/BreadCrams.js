import Flex from "./elements/Flex"

export default function BreadCrams(props) {
    return <Flex itemCenter flxBetween w100per {...props}>
        <p className='textLeft capitalized'>{props?.path}</p>
        {
            props?.children && <button>{props?.children}</button>
        }
    </Flex>
}