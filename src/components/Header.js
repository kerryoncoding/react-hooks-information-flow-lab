import React, {useState} from "react";

let newMode = "false"

function Header({mode, onDarkModeClick}){
   
   function handleClick(){
      console.log("clicked")
      console.log("mode", mode)
      onDarkModeClick(mode)
   }


   return (
        <header>
          <h2>Shopster</h2>
          <button onClick={handleClick}>
            {mode ? "Dark" : "Light"} Mode
          </button>
          
        </header>
   )
}


export default Header