import React from "react";

const Section = ({children,className}) => {
    return(
        <section
        className={className}
        >
            {children}
        </section>
    )
}


export { Section }