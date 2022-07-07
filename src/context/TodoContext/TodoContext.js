import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const TodoContext = React.createContext()

export const TodoProvider = ({children}) => {

  const [todos, setTodos] = useState([
    {text:'Hola',completed:false},
    {text:'Hola1',completed:false},
    {text:'Hola2',completed:false}
  ])
  const [innerWidth,setWidth] = useState(window.innerWidth)
  const [searchValue,setSearchValue] = useState('')
  const [openModal,setOpenModal] = useState(false)
  const [errorForm,setErrorForm] = useState(false)

  const dataUser = JSON.parse(localStorage.getItem('formData'))
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length
  let searchedTodos = []

  const windowWidthChange = () => {
    setWidth(window.innerWidth)
  }

  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    });
  }
  const toSomething = (text,action) => {

    const todoIndex = todos.findIndex(todo => todo.text === text);
    let newList = [...todos];

    const equal = newList.filter((item) => {
      return item.text.toLowerCase() === text.toLowerCase()
    });

    if (action === 'check') {

      if (equal[0].completed === true) {

        newList[todoIndex].completed = false

      } else {

        newList[todoIndex].completed = true
        setTimeout(() => {
          newList.splice(todoIndex,1)
          newList.push({
              text:text,
              completed: true
          })
          setTodos(newList)
        },500);

      }

      setTodos(newList);
    } else if (action === 'delete') {

      newList.splice(todoIndex,1);
      setTodos(newList);

    } else if (action === 'add') {
      if (text.length > 0) {
        if (equal.length === 0) {
            newList.unshift({
                text:text,
                completed:false
            })
            setOpenModal(!openModal)
        } else {
          setErrorForm(true)
        }
        setTodos(newList)
      }
    };
  };

  return (
    <TodoContext.Provider value={{
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        toSomething,
        openModal,
        setOpenModal,
        errorForm,
        setErrorForm,
        windowWidthChange,
        innerWidth,
        dataUser
    }}>
      {children}
    </TodoContext.Provider>
  )
}