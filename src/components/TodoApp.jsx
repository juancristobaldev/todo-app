import React, { useContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import { TASKS } from '../data/queries';
import '../styles/App.css';
import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import CreateTodoButton from './CreateTodoButton';
import DashBoard from './DashBoard';
import Main from './Main';
import Footer from './Footer';
import { Modal } from './Modal';
import TodoForm from './TodoForm';
import { TodoContext } from '../context/TodoContext/TodoContext';

const TodoApp = () => {
  const
    {
      toSomething,
      openModal,
      windowWidthChange,
      innerWidth,
    } = useContext(TodoContext);

  const [variables, setVariables] = useState({
    search: '',
  })

  const { search } = variables;


  const handleVariables = (e) => {
    console.log(e.value);
    setVariables({ ...variables, [e.target.name]: e.target.value });
  }

  const { data, loading: loadingTasks } = useQuery(TASKS, {
    variables: {
      search
    }
  });

  window.addEventListener('resize', () => {
    windowWidthChange()
  });

  return (
    <Main>
      <DashBoard
        user={'Juancri'}
      >
        <TodoCounter />
      </DashBoard>
      <TodoList>
        {innerWidth >= 500 &&
          <TodoSearch
            handleVariables={handleVariables}
            search={search}
          />
        }
        {loadingTasks ? <p style={{
          textAlign: "center",
          padding: "30%"
        }}>
          Loading... take it easy
        </p> : <>
          {data?.tasks?.length ? <>
            {data?.tasks?.map(todo => (
              <TodoItem
                key={todo.id}
                text={todo.name}
                completed={todo.state}
                onDelete={() => toSomething(todo.text, "delete")}
                onComplete={() => toSomething(todo.text, "check")}
              />
            ))}
          </> : <p style={{
            textAlign: "center",
            padding: "45% 0%"
          }}
          >
            ¡Create your first task!
          </p>}
        </>}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton />
      <Footer />
    </Main>
  )
}

export default TodoApp;