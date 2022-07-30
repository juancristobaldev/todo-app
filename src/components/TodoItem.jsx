import React from "react";
import CheckBox from "./CheckBox";
import '../styles/scss/TodoItem.scss';
import { AiOutlineClose } from "react-icons/ai";

export default function TodoItem({ onDelete, state, text, onComplete, theme }) {
    return (
        <div className={`todoItem ${state === 'completed' && 'onComplete'}`}>
            <div className={`nameItem ${state === 'completed' && 'itemDone'}`}>
                <span className="spanItem" onClick={() => onDelete()}><AiOutlineClose /></span>
                <div>
                    <p>{text}</p>
                </div>
            </div>

            <CheckBox theme={theme} completed={state === 'completed'} onClick={onComplete} />
        </div>
    )
}