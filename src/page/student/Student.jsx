import { Routes, Route } from "react-router";
import { stuPages } from "../../siteMap";
import StuAdd from "./stuAdd";
import StuList from "./StuList";
import StuSidebar from "./StuSidebar";


export default function Student() {


    return (
        <div className="Student flx1 flx">
            <StuSidebar />
            <Routes>

                <Route {...stuPages.list} />
                <Route {...stuPages.add} />
                <Route {...stuPages.profile} />
                <Route {...stuPages['']} />

            </Routes>

        </div>
    )
}