import React from "react";


const Text = ({className, style, children, onClick}) => {

    return onClick ? 
    <p
    style={style}
    onClick={() => onClick()}
    className={className}
    >
        {children}
    </p> 
    :
    <p
    style={style}
    className={className}
    >
        {children}
    </p>

}

export { Text }