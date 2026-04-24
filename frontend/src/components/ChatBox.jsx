import { useState, useRef } from 'react'

export default function ChatBox({ onSend, disabled }) {
  const [input, setInput] = useState('')
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() && !disabled) {
      onSend(input)
      setInput('')
      inputRef.current?.focus()
    }
  }

  return (
    <form className="input-area" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Ask me anything..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={disabled}
        autoFocus
      />
      <button type="submit" disabled={disabled || !input.trim()}>
        {disabled ? 'Thinking...' : 'Send'}
      </button>
    </form>
  )
}
