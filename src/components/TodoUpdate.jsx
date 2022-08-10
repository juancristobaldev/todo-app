import React from 'react'
import { Container } from './generals/Container';
import { Button } from './generals/Button';

const TodoUpdate = ({ modal, handleVariablesEdit, onEdit, onDelete }) => {
  return (<form
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
        onChange={event => handleVariablesEdit(event, modal.todo)}
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
        onClick={event => onDelete(event, modal.todo)}
        textButton={'Eliminar tarea'}
      />
    </Container>
  </form>);
}

export default TodoUpdate;