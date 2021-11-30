import './App.css';
import useAntext from './context/context';
import Routers from './Router';
import useSite from './siteMap'
import MainNav from './page/main/MainNav'
import './componentStyle.css'
import './iconsStyle.css'

function App() {
  const Site = useSite();
  const { auth } = useAntext();

  return (
    <div className="App vh100 flxC">
      <MainNav />
      <div className='mt55 flxC flx1'>
        <Routers />
      </div>
    </div>
  );
}

export default App;
