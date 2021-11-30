
import { Routes, Route } from 'react-router-dom'
import useSite from './siteMap'

export default function Routers() {

    const site = useSite()

    // MyRoute(site.home)

    return <Routes>
        {
            myRoute(site.home)
        }
        
        {
            myRoute(site.login)
        }

        {
            myRoute(site.register)
        }

        {
            myRoute(site.dashboard)
        }

        {
            myRoute(site.student)
        }

        {
            myRoute(site.teacher)
        }
    </Routes>


}

function myRoute(page) {
    // console.log(page.condition)
    if (page?.condition) {
        return <Route exact path={page.path} element={page.component} />
    } else {
        return <Route path='/asdf' element={''} />
    }
}