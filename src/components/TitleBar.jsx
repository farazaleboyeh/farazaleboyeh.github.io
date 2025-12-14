import React from "react";

function TitleBar(){
    return(
        <header>
            <h1>Yancheng Qiu</h1>

            <nav id="NavBarBig">
              <a href="hey">gallery</a>
              <a href="hey">for fun</a>
              <a href="hey">about</a>
            </nav>

            <nav id="NavBarSmall">
              <a href="hey">
                <img src="more.png" alt="Hamburger Menu Icon" height="30px" width="auto"/>
              </a>
            </nav>
        </header>
    )
}

export default TitleBar