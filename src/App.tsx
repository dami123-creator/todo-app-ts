import { useState } from 'react'
import { Todos } from './components/Todos'
import { type FilterValue, type TodoId, type Todo as TodoType } from './types'
import { TODO_FILTERS } from './const'
import { Footer } from './components/Footer'

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

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

  const handleFilterChange = (filter: FilterValue): void => {
    console.log(filter)
    setFilterSelected(filter)
  }
  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className='todoapp'>
      {/* <h1>Todo mvc</h1> */}
      <Todos
      onToggleCompleteTodo={handleCompleted}
      onRemoveTodos={handleRemove}
      todos={filteredTodos}
      />
      <Footer
      completedCount={completedCount}
      activeCount={activeCount}
      filterSelected={filterSelected}
      handleFilterChange={handleFilterChange}
      onClearCompleted={() => {}}
      />
    </div>
  )
}

export default App
