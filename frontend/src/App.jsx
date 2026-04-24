import { useState } from 'react'
import Chat from './pages/Chat'
import './index.css'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />
  }

  return (
    <div className="container">
      <Chat />
    </div>
  )
}

function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Call login API
    onLogin()
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1>VEN.ai Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
