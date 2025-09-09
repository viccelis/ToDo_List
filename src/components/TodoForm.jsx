import { useState } from 'react'
import PropTypes from 'prop-types'

export default function TodoForm({ onAdd, askConfirm, setAskConfirm }) {
  const [value, setValue] = useState('')
  const submit = (e) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setValue('')
  }

  return (
    <form className="form" onSubmit={submit}>
      <input
        className="input"
        type="text"
        placeholder="Escribe una nueva tarea..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Agregar</button>
      <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
        <input id="confirm-delete" type="checkbox" className="checkbox" checked={askConfirm} onChange={(e) => setAskConfirm(e.target.checked)} />
        <label htmlFor="confirm-delete">Pedir confirmación al eliminar</label>
      </div>
    </form>
  )
}
TodoForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  askConfirm: PropTypes.bool.isRequired,
  setAskConfirm: PropTypes.func.isRequired
}
