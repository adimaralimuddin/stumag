
import { Link } from "react-router-dom"
import useAntext from "../../context/context";
import useSite from "../../siteMap"

export default function MainNav() {
    const site = useSite();
    const { auth } = useAntext();

    return (
        <div className='MainNav plr10per flxBetween contentCenter  p10  test w100per shadow1 mxh55 front itemCenter white'>
            <div>
                <h2 className='logo'
                >UScap solution</h2>
            </div>
            <nav className='flx itemCenter'>
                <ul className='noStyle flxEvenly nav-ul '>
                    <li className='ml5'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='ml5'>
                        <Link to={site.dashboard.path}>Dashboard</Link>
                    </li>
                    <li className='ml5'>
                        <Link to={site.student.path}>Users</Link>
                    </li>

                    <li className='ml5'>
                        <Link to={site.login.path}>login</Link>
                    </li>

                    <li className='ml5'>
                        <Link to={site.register.path}>register</Link>
                    </li>
                </ul>
                <div>
                    <span class="material-icons md-48">face</span>

                </div>
            </nav>
        </div>
    )
}