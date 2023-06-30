import { type TodoId, type listOfTodos } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: listOfTodos
  onRemoveTodos: ({ id }: TodoId) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodos }) => {
  return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <li key={todo.id}
                    className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onRemoveTodo={onRemoveTodos}
                    />
                </li>
            ))}
        </ul>
  )
}
