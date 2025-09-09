import PropTypes from 'prop-types'

export default function TodoItem({ item, onToggle, onDelete }) {
  return (
    <div className={`item ${item.completed ? 'completed' : ''}`}>
      <input type="checkbox" className="checkbox" checked={item.completed} onChange={onToggle} />
      <span className="text">{item.text}</span>
      <button onClick={onDelete}>Eliminar</button>
    </div>
  )
}
TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}
