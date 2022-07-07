import React from "react";
import '../../styles/scss/CreateTodoButton.scss';
import { RiAddFill } from "react-icons/ri";
import { TodoContext } from "../../context/TodoContext/TodoContext";

export default function CreateTodoButton(){
    const {openModal,setOpenModal,setErrorForm,} = React.useContext(TodoContext)

    return(
        <button className="buttonCreateTodo"
        onClick={() => {
            setOpenModal(!openModal)
            setErrorForm(false)
        }}
        ><RiAddFill 
                    height=".5em"
                    width=".5em"
        />
        </button>
    )
}