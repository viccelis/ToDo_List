import PropTypes from 'prop-types'
import TodoItem from './TodoItem.jsx'

export default function TodoList({ items, onToggle, onDelete, currentFilter }) {
  if (items.length === 0) {
    const map = {
      all: 'Aún no tienes tareas. ¡Agrega la primera!',
      active: 'No hay tareas pendientes 🎉',
      completed: 'Todavía no hay tareas completadas.'
    }
    return <div className="empty">{map[currentFilter] || map.all}</div>
  }
  return (
    <ul className="list">
      {items.map(item => (
        <li key={item.id}>
          <TodoItem item={item} onToggle={() => onToggle(item.id)} onDelete={() => onDelete(item.id)} />
        </li>
      ))}
    </ul>
  )
}
TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  currentFilter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired
}
