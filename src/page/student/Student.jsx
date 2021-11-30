import { Routes, Route } from "react-router";
import { stuPages,TeachPages } from "../../siteMap";
import StuSidebar from "./StuSidebar";


export default function Student() {


    return (
        <div className="Student flx1 flx">
            <StuSidebar />
            <Routes>

                <Route {...stuPages['']} />
                <Route {...stuPages.list} />
                <Route {...TeachPages.list} />
                <Route {...stuPages.add} />
                <Route {...TeachPages.add} />
                <Route {...stuPages.profile} />
                <Route {...stuPages.subjects} />
                <Route {...stuPages.course} />

            </Routes>

        </div>
    )
}