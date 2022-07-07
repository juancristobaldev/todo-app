import React from "react";
import Main from "../Main/Main";
import Section from "../Section/Section";
import '../../styles/scss/Login.scss';

const LoginLayout = ({ children,width }) => {
    return(
        <Main className="mainLogin">
        <Section className="sectionFormLogin">
            { children }
        </Section>
        <Section
        className="welcomeLogin">
            <div>
                {width > 600 && 
                <React.Fragment>
                    <h1>ToDo App</h1>
                    <h3>
                        Anota tus tareas y <br/>
                        hazla realidad
                    </h3>
                </React.Fragment>
                }
            </div>
        </Section>
    </Main>
)
}

export default LoginLayout;