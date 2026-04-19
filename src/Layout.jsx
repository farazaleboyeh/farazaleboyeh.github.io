import TitleBar from "./components/TitleBar"
import { Outlet } from "react-router-dom"
import { useLocation } from 'react-router-dom'
import React, { useState } from 'react';

/* Prop drilling is performed here, to pass the current path to the Navbar. Is accepted React practice */

function Layout({path}){
    const location = useLocation();
    const [collection, setCollection] = useState("gallery");

    // console.log("test: " + collection);

    return(
        <>
            <TitleBar path={location.pathname} setCollection={setCollection}/>
            <main>
                <Outlet context={{ collection, setCollection }}/>
            </main>
        </>
    )
}

export default Layout