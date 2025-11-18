import { useState } from 'react'
import './paco.css'

function Paco() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count of paco is {count}
        </button>
      </div>
    </>
  )
}

export default Paco
