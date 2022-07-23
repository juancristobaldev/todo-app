import React from "react";
import CheckBox from "./CheckBox";
import '../styles/scss/TodoItem.scss';
import { AiOutlineClose } from "react-icons/ai";

export default function TodoItem({onDelete,completed,text,onComplete,theme}){
    return(
        <div className={`todoItem ${completed && 'onComplete'}`}>
            <div className={`nameItem ${completed && 'itemDone'}`}>
                <span className="spanItem" onClick={() => onDelete()}><AiOutlineClose/></span>
                <div>
                    <p>{text}</p>
                </div>
            </div>
            
            <CheckBox theme={theme} completed={completed} onClick={onComplete}/>
        </div>
    )
}