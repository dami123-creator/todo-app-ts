import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoId, type Todo as TodoType } from './types'

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

  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      {/* <h1>Todo mvc</h1> */}
      <Todos
      onToggleCompleteTodo={handleCompleted}
      onRemoveTodos={handleRemove}
      todos={todos} />
    </div>
  )
}

export default App
