import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { TodoContext } from "../context/TodoContext/TodoContext";
import { TASK_CREATE } from "../data/mutations";
import '../styles/scss/formModal.scss';


export default function TodoForm({updateModal}){

    const {
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)

    const [variables,setVariables] = useState({
        name:''
    })

    const [taskCreate] = useMutation(TASK_CREATE)

    const onChange = (e) => {
        setVariables({...variables, [e.target.name]: e.target.value})
    }

    const onCancel = (event) => {
        event.preventDefault()
        setOpenModal(!openModal)
    }
    const onSubmit =  async event => {
        event.preventDefault()
        updateModal({state:true, type:'loading'})
        await taskCreate({
            variables: {
                input: {
                    ...variables
                }
            }
        }).then( async ({ data }) =>  {
            setOpenModal(false)
            const {errors,success} = data.taskCreate
            if(success){
                updateModal(
                        {
                            state:true, 
                            type:'success',
                            message:'Tarea creada con exito',
                        }
                    )
            }
            if(errors){
                updateModal({state:false})
                setOpenModal(true)
            }
        }).catch(error => console.log(error))
        
    }

    return(
        <div className="back">
            <form className="formModal" onSubmit={onSubmit}>
                <label>ADD A NEW TASK</label>
                <div className="divInput">
                    <input
                        name="name"
                        placeholder="New task"
                        value={variables.name}
                        onChange={(e) => onChange(e)}
                    />
                    {
                    <div className="divError">
                        
                    </div>
                    }
                </div>
                <div className="divButton">
                    <button
                    className="onCancel"
                    type="submit"
                    onClick={onCancel}
                    >
                        Cancel
                    </button>
                </div>
                <div className="divButton">
                    <button
                    className="onSubmit"
                    type="submit"
                    onClick={(e) => onSubmit(e)}
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}