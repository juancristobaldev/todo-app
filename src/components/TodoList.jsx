import React from "react";
import '../styles/scss/sectionTodos.scss';

export default function TodoList({children}){
    return(
        <section className="sectionTodos">
            {children}
        </section>
    )
}