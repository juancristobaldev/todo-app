import React from "react";

const Button = ({textButton,onClick,className}) => {
    
    return(
        <button
        style={{cursor:"pointer"}}
        className={className}
        onClick={onClick}
        >{textButton}</button>
    )
}

export {Button}