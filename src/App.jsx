import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <button className="btn btn-outline btn-warning">Warning</button>
      <Outlet></Outlet>
    </>
  )
}

export default App
