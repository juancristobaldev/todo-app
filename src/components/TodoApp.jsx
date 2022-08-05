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
import { Text } from './generals/Text';
import { Button } from './generals/Button';
import { Container } from './generals/Container';

import ReactLoading from "react-loading"

import { TodoContext } from '../context/TodoContext/TodoContext';
import { TASK_DELETE, TASK_UPDATE } from '../data/mutations';

const TodoApp = () => {

  const [ taskDelete ] = useMutation(TASK_DELETE)

  const [ taskUpdate ] = useMutation(TASK_UPDATE)


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
  const [variablesEdit, setVariablesEdit] = useState({
    id:null,
    name: '',
    slug:null,
    state:null
  })

  console.log(variablesEdit)
  const [modal,updateModal] = useState({
    state:false,
    type:null,
    message:'',
    elementName:''
  })

  const { search } = variables;

  const { data, loading: loadingTasks } = useQuery(TASKS, {
    variables: {
      search
    }
  });

  window.addEventListener('resize', () => {
    windowWidthChange()
  });

  const handleVariables = (e) => {
    setVariables({ ...variables, [e.target.name]: e.target.value });
  }

  const handleVariablesEdit = (e,todo) => {
    setVariablesEdit(
      {...variablesEdit,
        [e.target.name]:e.target.value,
        id:todo.id,
        slug:todo.name,
        state:todo.state
      }
    )
  }

  const onDelete = async (event,todo) => {
    event.preventDefault()
    updateModal({state:true, type:"loading"})
    await taskDelete({
      variables: {
        input:{
          id:todo.id,
          slug:todo.name
        }
      }
    }).then(async ({data}) => {
      const {errors,success} = data.taskDelete
      if(success) updateModal(
        {
            state:true, 
            type:'success',
            message:'Tarea eliminada con exito',
        }
      )
      if(errors){

      }
    })
  } 

  const onEdit = async (event) => {
    event.preventDefault()
    updateModal({state:true,type:"loading"})
    await taskUpdate({
      variables:{
        input:{
          ...variablesEdit
        }
      }
    }).then( async ({ data }) => {
      const {errors,success} = data.taskUpdate
      if(success) updateModal(
        {
            state:true, 
            type:'success',
            message:'Tarea editada con exito',
        }
      )
    })

  }

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
                onEdit={() => updateModal({state:true,type:"edit",todo:todo})}
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
          updateModal={updateModal} />
        </Modal>
      )}
      {
                modal.state === true &&
                <Modal>
                    <Container className="back"
                    onClick={modal.type === "success" ? () => updateModal({state:false}) : false}
                    >
                        {modal.type === "loading" && 
                            <Container className="modalLoading">
                                <ReactLoading type="spokes"/>
                            </Container>
                        }
                        {modal.type === "success" && 
                            <Container className="modal">
                                <Text
                                className={'text'}>
                                  🎉
                                  <br/>
                                  {modal.message}
                                </Text>
                            </Container>
                        }
                        {modal.type === "edit" && 
                          <form
                          className={'formModal'}
                          >
                            <label>
                              EDITAR TAREA
                            </label>
                            <Container
                            className={'divInput'}
                            >
                              <input 
                              name='name'
                              onChange={event => handleVariablesEdit(event,modal.todo)}
                              placeholder={modal.todo.name}
                              />
                            </Container>
                            <Container 
                            className={'divButton'}
                            >
                              <Button
                              className={'onEdit'}
                              onClick={event => onEdit(event)}
                              textButton={'Editar'}
                              />
                            </Container>
                            <Container
                            className={'divButton'}
                            >
                              <Button
                                className={'onDelete'}
                                onClick={event => onDelete(event,modal.todo)}
                                textButton={'Eliminar tarea'}
                              />
                            </Container>
                          </form>
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