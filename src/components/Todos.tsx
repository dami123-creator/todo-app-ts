import { type listOfTodos } from '../types'

interface Props {
  todos: listOfTodos
}

export const Todos: React.FC<Props> = ({ todos }) => {
  return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}
                    className={`${todo.completed ? 'completed' : ''}`}>
                    {todo.title}
                </li>
            ))}
        </ul>
  )
}
