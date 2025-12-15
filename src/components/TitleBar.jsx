import React, { useState } from 'react';

function TitleBar(){

  const [open, setOpen] = useState(false);
  
  return(
    <>        
      <header>
        <h1>Yancheng Qiu</h1>

        <nav id="NavBarBig">
          <a href="hey">gallery</a>
          <a href="hey">for fun</a>
          <a href="hey">about</a>
        </nav>

        <nav id="NavBarSmall">
            <img src="more.png" alt="Hamburger Menu Icon" height="30px" width="auto" onClick={() => setOpen(o => !o)}/>
        </nav>

        <nav id="NavBarSmallExpanded" className={open ? "show" : ""}>
          <div id="items">
            <a href="hey">gallery</a>
            <a href="hey">for fun</a>
            <a href="hey">about</a>
          </div>
        </nav>
      </header>
    </>
  )
}

export default TitleBar