import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoId } from './types'

const mockTodos = [
  {
    id: '0',
    title: 'test',
    completed: false
  },
  {
    id: '1',
    title: 'do homework',
    completed: true
  },
  {
    id: '2',
    title: 'wash dishes',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      {/* <h1>Todo mvc</h1> */}
      <Todos
      onRemoveTodos={handleRemove}
      todos={todos} />
    </div>
  )
}

export default App
