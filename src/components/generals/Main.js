import React from "react";

const Main = ({className,style,children}) => {
    return(
        <main
        style={style}
        className={className}
        >
            {children}
        </main>
    )
}

export { Main }