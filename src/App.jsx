import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif', padding: 24 }}>
      <h1>Portfolio</h1>
      <p>React + Vite (JavaScript) is set up.</p>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
    </div>

    <Alert variant="success">This is a success alert!</Alert>
    <Button variant="primary">Primary Button</Button>
    </>
  )
}
