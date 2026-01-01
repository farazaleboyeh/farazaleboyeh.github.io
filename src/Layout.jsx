import TitleBar from "./components/TitleBar"
import { Outlet } from "react-router-dom"
import { useLocation } from 'react-router'

/* Prop drilling is performed here, to pass the current path to the Navbar. Is accepted React practice */

function Layout({path}){
    const location = useLocation();

    return(
        <>
            <TitleBar path={location.pathname}/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout