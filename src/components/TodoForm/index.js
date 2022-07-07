import React from "react";
import { TodoContext } from "../../context/TodoContext/TodoContext";
import '../../styles/scss/formModal.scss';

export default function TodoForm(){
    const [textArea,setTextArea] = React.useState('')
    const {
        toSomething,
        openModal,
        setOpenModal,
        errorForm,
        setErrorForm,
    } = React.useContext(TodoContext)

    const onChange = (e) => {
        setTextArea(e.target.value)
        setErrorForm(false)
        
    }

    const onCancel = (event) => {
        event.preventDefault()
        setOpenModal(!openModal)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        toSomething(textArea,"add")
    }

    return(
        <div className="back">
            <form className="formModal" onSubmit={onSubmit}>
                <label>ADD A NEW TASK</label>
                <div className="divInput">
                    <input
                        placeholder="New task"
                        value={textArea}
                        onChange={(e) => onChange(e)}
                    />
                    {errorForm && <div className="divError"><p>This task already exist</p></div>}
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
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}