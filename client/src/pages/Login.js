import React, { useState, useContext } from 'react'
import '../App.css'
import axios from '../axios.js'
import { useNavigate } from 'react-router-dom'
import { ContextProvider } from '../context/Context.js'

const Login = () => {
  const styles ={
    formCover: 'w-7/12 h-3/6 p-5 ',
    header: 'text-5xl text-white text-center',
    form: 'flex flex-col items-center mt-10',
    inputText: 'p-1 text-lg px-4 rounded-lg focus:outline-none my-4 w-4/12',
    SignInWithMe: 'text-lg text-white m-3 hover:text-rose-500',
    errorMsg: 'text-rose-600'
  }
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const navigator = useNavigate()
  const manageState = useContext(ContextProvider)
  console.log(manageState)

  const handleRegistration = async (e) => {
    e.preventDefault()
    axios.post('/api/v1/login', {
      'username': username,
      'password': password
    })
    .then((res)=>{
      manageState.setUser(res.data)
      localStorage.setItem('user', res.data)
      navigator('/dashboard')
      /* console.log(res.data) */
    })
    .catch((err)=>{
      setMsg(err.response.data)
    })
    setUsername('')
    setPassword('')
  }
  return (
    <div className='gradient-bg-welcome w-screen h-screen flex justify-center items-center'>
      <div className= {styles.formCover}>
        <p className={styles.header}>Authenticate</p>
        <form className={styles.form}>
          <input 
            type='text' 
            placeholder='username'
            className={styles.inputText}
            required
            autoComplete= 'username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}/>
          <input
            type='password' 
            placeholder='password'
            className={styles.inputText} 
            required
            autoComplete='current-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          <button
            className={styles.SignInWithMe}
            onClick={handleRegistration}>
            Sign-in
          </button>
          {
            msg && (
              <p className= {styles.errorMsg}>{msg}</p>
            )
          }
      </form>
      </div>
    </div>
  )
}

export default Login