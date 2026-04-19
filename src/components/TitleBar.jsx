import { Link } from 'react-router-dom';

import React, { useState } from 'react';

function TitleBar({path, setCollection}){

  const [open, setOpen] = useState(false);
  const [scroll, secScroll] = useState(true);

  return(
    <>        
      <header>
        
        <h1>Yancheng Qiu</h1>
      
        <nav id="NavBarBig">
          <Link id="gallery" to="/" className={path === "/" ? "currentTab" : ""}>gallery</Link>
          <Link id="collections" to="/about" className={path === "/x" ? "currentTab" : ""}>collections</Link>
          {/* <Link id="for-fun" to="/for-fun" className={path === "/for-fun" ? "currentTab" : ""}>for fun</Link> */}
          <Link id="about" to="/about" className={path === "/about" ? "currentTab" : ""}>about</Link>
          <div style={{display:"block;"}}>
              <button onClick={() => setCollection("for-fun")}>for fun</button>
              <button onClick={() => setCollection("mamba-rec-league")}>mamba rec leaague</button>
              <button onClick={() => setCollection("mcmaster-mbb")}>mcmaster mbb</button>
              <button onClick={() => setCollection("shayok-summer-showcase")}>shayok summer showcase</button>
              <button onClick={() => setCollection("volleyball-nations-league")}>volleyball nations league</button>

              
          </div>
        </nav>

        <nav id="NavBarSmall">
            <img src="more.png" id="burger" alt="Hamburger Menu Icon" height="30px" width="auto" onClick={() => setOpen(o => !o)}/>
        </nav>

        <nav id="NavBarSmallExpanded" className={open ? "show" : ""}>
          <img src="delete.png" alt="close" id="close" width="30px" onClick={() => setOpen(o => !o)}/>
          <div id="items">
            <Link to="/">gallery</Link>
            <Link to="/for-fun">for fun</Link>
            <Link to="/about">about</Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default TitleBar

