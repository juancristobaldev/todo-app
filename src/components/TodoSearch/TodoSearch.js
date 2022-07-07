import React from "react";
import { TodoContext } from "../../context/TodoContext/TodoContext";
import '../../styles/scss/TodoSearch.scss';

export default function TodoSearch(){

    const {searchValue,setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }

    return(
        <div className="todoSearchDiv">
            <div className="divInput">
                <input 
                placeholder="Search Task"
                value={searchValue}
                onChange={onSearchValueChange}
                />
            </div>
        </div>
    )
}