import React, { useState } from "react";
import FormLogin from "./Forms/FormLogin";
import LoginLayout from "../layouts/LoginLayout";

import '../../styles/scss/Login.scss';


export default function SignIn(){
    const [width,setWidth] = useState(window.innerWidth)
    const [valueForm, setValueForm] = useState({
        user:'',
        name:'',
        pass:'',
        passConfirm:'',
        
    })

    const [error,setError] = useState(
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

    const onLogin = (event) => {
        event.preventDefault()
        /* const formData = JSON.parse(localStorage.getItem('formData'))
        if(valueForm.user === formData.user && valueForm.pass === formData.pass){
            console.log('Login')
           /* window.location.reload() 
        }else{
            setError({
                error:true,
                type:'Usuario y/ó contraseña incorrecta'
            })
        }*/
    }

    return(
        <LoginLayout
        width={width}
        >
            <FormLogin
            formDates={formDates}
            onLogin={onLogin}
            width={width}
            error={error}
            />
        </LoginLayout>
    )
}