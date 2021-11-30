
import { Link } from "react-router-dom"
import { stuPages,TeachPages } from "../../siteMap"


export function SidebarMenu(props) {
    return <> <Link {...props} >
        <div className='side-menu'>
            <h3>{props.children}</h3>
        </div>
    </Link>
    </>
}
export function SidebarMenuMin(props) {
    return <> <Link {...props} >
        <div className='side-menu-min'>
            <h3>{props.children}</h3>
        </div>
    </Link>
    </>
}



export default function StuSidebar(props) {
    return (
        <div {...props} className={`
            white  w30per mxw180 sidebar
        `}>
            <br />
            <div className='fixed flxC hide1000  mnw150'>

                <br />
                <SidebarMenu to={stuPages.list.path}>Student</SidebarMenu>
                <SidebarMenu to={TeachPages.list.path}>teacher</SidebarMenu>
                <SidebarMenu to={stuPages.add.path}>add student</SidebarMenu>
                <SidebarMenu to={TeachPages.add.path}>add teacherss</SidebarMenu>
                <SidebarMenu to={stuPages.profile.path}>profile</SidebarMenu>
                <SidebarMenu to={stuPages.subjects.path}>subjects</SidebarMenu>
                <SidebarMenu to={stuPages.course.path}>courses</SidebarMenu>

            </div>

            <div className="show1000 fixed mnw50 mxw50 flxC">

                <SidebarMenuMin to={stuPages.list.path}>

                    <span class="material-icons">
                        view_list
                    </span>
                </SidebarMenuMin>

                <SidebarMenuMin to={stuPages.add.path}>
                    <span class="material-icons">
                        person_add
                    </span>
                </SidebarMenuMin>

                <SidebarMenuMin to={stuPages.profile.path}>
                    <span class="material-icons">
                        person
                    </span>
                </SidebarMenuMin>

                <SidebarMenuMin to={stuPages.subjects.path}>
                    <span class="material-icons">
                        golf_course
                    </span>
                </SidebarMenuMin>
                <SidebarMenuMin to={stuPages.course.path}>
                    <span class="material-icons">
                        school
                    </span>
                </SidebarMenuMin>
            </div>




        </div>
    )
}