import React, { useContext, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { TASKS } from '../data/queries';
import '../styles/App.css';
import '../styles/scss/formModal.scss';
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
import { Container } from './generals/Container';

import { TodoContext } from '../context/TodoContext/TodoContext';
import { TASK_DELETE, TASK_UPDATE } from '../data/mutations';
import TodoUpdate from './TodoUpdate';
import Alert from './generals/Alert';
import Loading from './generals/Loading';

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
  });

  const [variablesEdit, setVariablesEdit] = useState({
    id: null,
    name: '',
    slug: null,
    state: null
  });

  const [modal, updateModal] = useState({
    state: false,
    type: null,
    message: '',
    elementName: ''
  });

  const { search } = variables;


  const handleVariables = (e) => {
    setVariables({ ...variables, [e.target.name]: e.target.value });
  }

  const handleVariablesEdit = (e, todo) => {
    setVariablesEdit(
      {
        ...variablesEdit,
        [e.target.name]: e.target.value,
        id: todo.id,
        slug: todo.name,
        state: todo.state
      }
    )
  }

  // QUERIES
  const { data, loading: loadingTasks } = useQuery(TASKS, {
    ...(search !== '' && { variables: { search } })
  });

  // MUTATIONS
  const [taskDelete] = useMutation(TASK_DELETE, {
    update: (cache, { data: { taskDelete } }) => {
      const { success, task } = taskDelete;
      if (!success) return false;

      const { tasks } = cache.readQuery({
        query: TASKS,
        ...(search !== '' && ({ variables: search })),
      });

      cache.writeQuery({
        query: TASKS,
        ...(search !== '' && ({ variables: search })),
        data: {
          tasks: tasks.filter((item) => item?.id !== task?.id),
        }
      });
    }
  });

  const [taskUpdate] = useMutation(TASK_UPDATE);

  // EVENTS

  const onDelete = async (event, todo) => {
    event.preventDefault()
    updateModal({ state: true, type: "loading" })
    await taskDelete({
      variables: {
        input: {
          id: todo.id,
          slug: todo.name
        }
      }
    }).then(async ({ data }) => {
      const { success } = data.taskDelete;
      if (success) updateModal(
        {
          state: true,
          type: 'success',
          message: 'Tarea eliminada con exito',
        }
      )
    })
  }

  const onEdit = async (event) => {
    event.preventDefault()
    updateModal({ state: true, type: "loading" })
    await taskUpdate({
      variables: {
        input: {
          ...variablesEdit
        }
      }
    }).then(async ({ data }) => {
      const { success } = data.taskUpdate
      if (success) updateModal(
        {
          state: true,
          type: 'success',
          message: 'Tarea editada con exito',
        }
      )
    })
  };

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
      {innerWidth <= 500 &&
        <TodoSearch
          handleVariables={handleVariables}
          search={search}
        />
      }
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
                onEdit={() => updateModal({ state: true, type: "edit", todo: todo })}
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
          <TodoForm
            search={search} />
        </Modal>
      )}
      {
        modal.state &&
        <Modal>
          <Container className="back"
            onClick={modal.type === "success" ? () => updateModal({ state: false }) : false}
          >
            {modal.type === "loading" &&
              <Loading />
            }
            {modal.type === "success" &&
              <Alert message={modal.message} />
            }
            {modal.type === "edit" &&
              <TodoUpdate
                modal={modal}
                handleVariablesEdit={handleVariablesEdit}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            }
          </Container>
        </Modal>
      }
      <CreateTodoButton />
      <Footer />
    </Main>
  )
}

export default TodoApp;