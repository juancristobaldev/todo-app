import React, { useState } from "react";
import FormRegister from "./Forms/FormRegister";
import LoginLayout from "../layouts/LoginLayout";

import '../../styles/scss/Login.scss';

export default function SignUp(){
    const [width,setWidth] = React.useState(window.innerWidth)
    const [valueForm, setValueForm] = React.useState({
        user:'',
        name:'',
        pass:'',
        passConfirm:'',
        
    })
    const [error,setError] = React.useState(
        {
            error:false,
            type:''
        }
    )

    const windowWidthChange = () => {
        setWidth(window.innerWidth)
    }

    window.addEventListener('resize', () => {
        windowWidthChange()
    })

    const formDates = (event,input) => {
        const object = {...valueForm}
        object[input] = event.target.value
        setValueForm(object)
        setError({error:false})
    }

    function onRegister(event){
        event.preventDefault()
        if(valueForm.pass !== valueForm.passConfirm) return setError(
            {error:true,type:'Debes escribir dos veces la misma contraseña'}
        )
        console.log('registrado')
    }    

    return(
        <LoginLayout 
        width={width}>
            <FormRegister
            formDates={formDates}
            onRegister={onRegister}
            width={width}
            error={error}
            />
        </LoginLayout>
    )
}