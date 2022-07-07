import React, { useState } from "react";


function SelectTheme(){
    const [theme,setTheme] = useState({})

    const themes = [    
        {primary:"95, 161, 250",secondary:"255,255,255",input:"95, 161, 250"},
        {primary:"134, 98, 232",secondary:"255,255,255",input:"134, 98, 232"},
        {primary:"255, 234, 121",secondary:"0,0,0",input:"0,0,0"},
        {primary:"3, 44, 136",secondary:"255,255,255",input:"3, 44, 136"}
        ]
        


    return(
        <div style={{
            display:"flex",
            height:"100%",
            alignItems:"center"

        }}>
        {themes.map(theme => 
        
        <div 
            key={theme.primary}
            style={{
                backgroundColor:`rgba(${theme.primary})`,
                cursor:"Pointer",
                margin:"5px",
                width:"25px",
                height:"25px",
                borderRadius:"100%"
            }}
            onClick={() => setTheme(theme)}
        >

        </div>)}
        </div>

    )
}

export {SelectTheme}