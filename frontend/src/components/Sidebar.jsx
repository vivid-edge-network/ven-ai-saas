import { useState } from 'react'

export default function Sidebar({ onNavigate }) {
  const [active, setActive] = useState('chat')

  const handleClick = (page) => {
    setActive(page)
    onNavigate(page)
  }

  return (
    <div className="sidebar">
      <h2>VEN.ai</h2>
      <nav>
        <button
          className={active === 'chat' ? 'active' : ''}
          onClick={() => handleClick('chat')}
        >
          💬 Chat
        </button>
        <button
          className={active === 'dashboard' ? 'active' : ''}
          onClick={() => handleClick('dashboard')}
        >
          📊 Dashboard
        </button>
        <button
          className={active === 'admin' ? 'active' : ''}
          onClick={() => handleClick('admin')}
        >
          ⚙️ Admin
        </button>
      </nav>
    </div>
  )
}
