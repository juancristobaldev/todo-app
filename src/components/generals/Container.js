import React from "react"

const Container = ({style,onClick,children,className}) => {
    if(onClick) return(
        <div
        onClick={() => onClick()}
        className={className}
        style={style}
        >
            {children}
        </div>
    )
    else return(
        <div
        className={className}
        style={style}
        >
            {children}
        </div>
    )
    
            
    
    

}

export {Container}