import { useState } from 'react'
import { Todos } from './components/Todos'

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
  const [todos] = useState(mockTodos)
  return (
    <>
      <h1>Todo mvc</h1>
      <Todos todos={todos} />
    </>
  )
}

export default App
