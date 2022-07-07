import React from "react"
import '../../styles/scss/main.scss';

export default function Main({children,className}){   
    return(
        <main className={className}>
            {children}
        </main>
    )
}