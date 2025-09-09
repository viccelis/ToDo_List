import PropTypes from 'prop-types'

export default function Stats({ total, pending, completed }) {
  return (
    <div className="meta">
      <span className="badge">Total: {total}</span>
      <span className="badge">Pendientes: {pending}</span>
      <span className="badge">Completadas: {completed}</span>
    </div>
  )
}
Stats.propTypes = {
  total: PropTypes.number.isRequired,
  pending: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired
}
