import BreadCrams from "../../../component/BreadCrams"
import Flex from "../../../component/elements/Flex"
import CourseListItems from "./CourseListItems"
import Query from "./Query"


const courseData = [
    {
        acro: 'bsit',
        title: 'course1',
        year: 4,
        discription: 'whatever'
    },
    {
        acro: 'bsit',
        title: 'course1',
        year: 4,
        discription: 'whatever'
    },
    {
        acro: 'bsit',
        title: 'course1',
        year: 4,
        discription: 'whatever'
    },
    {
        acro: 'bsit',
        title: 'course1',
        year: 4,
        discription: 'whatever'
    },
    {
        acro: 'bsit',
        title: 'course1',
        year: 4,
        discription: 'whatever'
    },
]


export default function Courses() {
    return (
        <div className='flxC flx1 p20 itemCenter'>
            <div className='flx1 w100per mxw900'>
                <BreadCrams path='Courses / List'>Add Course</BreadCrams>
                <br />
                <Query />
                <br />
                <CourseListItems data={courseData} />
            </div>
        </div>
    )
}
