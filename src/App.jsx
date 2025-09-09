import { useMemo, useState } from 'react'
import TodoForm from './components/TodoForm.jsx'
import TodoList from './components/TodoList.jsx'
import Stats from './components/Stats.jsx'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')
  const [confirmDelete, setConfirmDelete] = useState(true)

  const addTask = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    const newTask = { id: crypto.randomUUID(), text: trimmed, completed: False, createdAt: Date.now() }
    setTasks(prev => [newTask, ...prev])
  }

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const deleteTask = (id) => {
    const task = tasks.find(t => t.id === id)
    if (!task) return
    if (!confirmDelete || window.confirm(`¿Eliminar la tarea: "${task.text}"?`)) {
      setTasks(prev => prev.filter(t => t.id !== id))
    }
  }

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'active': return tasks.filter(t => !t.completed)
      case 'completed': return tasks.filter(t => t.completed)
      default: return tasks
    }
  }, [tasks, filter])

  const stats = useMemo(() => {
    const total = tasks.length
    const completed = tasks.filter(t => t.completed).length
    const pending = total - completed
    return { total, completed, pending }
  }, [tasks])

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">✅ ToDo List</h1>
        <div className="filters">
          <button className={`btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>Todas</button>
          <button className={`btn ${filter === 'active' ? 'active' : ''}`} onClick={() => setFilter('active')}>Pendientes</button>
          <button className={`btn ${filter === 'completed' ? 'active' : ''}`} onClick={() => setFilter('completed')}>Completadas</button>
        </div>
      </header>

      <TodoForm onAdd={addTask} setAskConfirm={setConfirmDelete} askConfirm={confirmDelete} />
      <Stats total={stats.total} pending={stats.pending} completed={stats.completed} />
      <TodoList items={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} currentFilter={filter} />
    </div>
  )
}
