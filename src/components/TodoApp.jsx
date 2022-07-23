import React, { useContext } from 'react';
import '../styles/App.css';
import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import CreateTodoButton from './CreateTodoButton';
import DashBoard from  './DashBoard';
import Main from './Main';
import Footer from './Footer';
import { Modal } from './Modal';
import TodoForm from './TodoForm';
import { TodoContext } from '../context/TodoContext/TodoContext';

const TodoApp = () => {
    const 
    {error,
    loading,
    searchedTodos,
    toSomething,
    searchValue,
    setSearchValue,
    openModal,
    windowWidthChange,
    innerWidth,
    dataUser
    } = useContext(TodoContext);

    window.addEventListener('resize', () => {
        windowWidthChange()
    });

    return (
        <Main>
        <DashBoard 
          user={'Juancri'}
        >
          <TodoCounter/>
        </DashBoard>
        {innerWidth <= 499 &&
          <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
          />
        }
        <TodoList>
        {innerWidth >= 500 &&
          <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
          />
        }
          {error && <p style={{
            textAlign:"center",
            padding:"30%"
          }}>
            Oops! this is error...</p>}
          {loading && <p style={{
            textAlign:"center",
            padding:"30%"
            }}>
              Loading... take it easy
            </p>}
          {(!loading && !searchedTodos.length ) && 
            <p style={{
              textAlign:"center",
              padding:"45% 0%"
            }}
            >
            ¡Create your first task!
            </p>
          }
          {searchedTodos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onDelete = {() => toSomething(todo.text,"delete")}
                onComplete={() => toSomething(todo.text,"check")}
                />
          ))}
        </TodoList>
            {openModal && (
              <Modal>
                <TodoForm/>
              </Modal>
            )}
        <CreateTodoButton/>
        <Footer/>
      </Main>
    )
}

export default TodoApp;