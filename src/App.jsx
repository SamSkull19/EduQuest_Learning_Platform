import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './BasicStructure/Navbar'

function App() {

  return (
    <>
      <div className='bg-teal-800'>
        <div className="max-w-[1170px] mx-auto">
          <Navbar></Navbar>
        </div>
      </div>

      <Outlet></Outlet>

      
    </>
  )
}

export default App
