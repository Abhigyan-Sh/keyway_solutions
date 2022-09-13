import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard.js'
import Login from './pages/Login.js'
import Guest from './pages/Guest.js'
import Home from './pages/Home.js'
import { ContextProvider } from './context/Context.js'

function App() {
  const { user } = useContext(ContextProvider)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={user ? <Dashboard/> : <Login/>} />
        <Route path='/login' element={!user ? <Login/> : <Dashboard/>} />
        <Route path='/guest' element={<Guest/>}/>
      </Routes>
    </div>
  );
}

export default App;
