import React from 'react'
import { render } from 'react-dom'
import IconButton from '../template/iconButton'

export default props => {

const list = props.list || []
  const renderRows = () => {
      return list.map(todo => (
          <tr key={todo._id}>
              <td>{todo.description}</td>
              <td>
                  {/* <IconButton style='danger' icon='trash-o' */}
                 {/* onClick={() = props.handleRemove(todo)} > */}
7yu
                  {/* </IconButton> */}
              </td>
          </tr>
      ))

  }

  return (
      <table className='table'>
          <thead>
              <tr>
                  <th>Descrição</th>
                  <th>Ações</th>
              </tr>
          </thead>
          <tbody>
              {renderRows()}
          </tbody>
      </table>

  )
  }