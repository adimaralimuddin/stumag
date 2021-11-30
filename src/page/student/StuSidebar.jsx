
import { Link } from "react-router-dom"
import { stuPages } from "../../siteMap"

export default function StuSidebar(props) {
    return (
        <div {...props} className={`
            white p10 w30per mxw200 sidebar
        `}>

            <div className='fixed hide1000'>

                <br />
                <div className="side-menu">
                    <h3>List</h3>
                </div>
                <div className="side-menu">
                    <h3>Add Student</h3>
                </div>
                <div className="side-menu">
                    <h3>Marks</h3>
                </div>
                <div className="side-menu">
                    <h3>Schedule</h3>
                </div>
                <div className="side-menu">
                    <h3>course</h3>
                </div>
                <div className="side-menu">
                    <h3>Subject</h3>
                </div>

            </div>

            <div className="show1000 fixed mnw30">
                <Link to={stuPages.list.path}>
                    <div className='side-menu-min'>
                        l
                    </div>
                </Link>
                <Link to={stuPages.add.path}>
                    <div className='side-menu-min'>
                        a
                    </div>
                </Link>
                <Link to={stuPages.profile.path}>
                    <div className='side-menu-min'>
                        p
                    </div>
                </Link>
                <div className='side-menu-min'>
                    <h3>x</h3>
                </div>
            </div>




        </div>
    )
}