import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const Home = () => {
  const styles = {
      pgCover: 'gradient-bg-welcome h-screen w-screen flex justify-center items-center',
      BtnCover: 'flex gap-5 sm_cstm:flex-col',
      navigationBtns: 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
  }
  const navigator = useNavigate()
  return (
    <div className={styles.pgCover}>
        <div className= {styles.BtnCover}>
            <button onClick={() => {navigator('/login')}} className={styles.navigationBtns}>login</button>
            <button onClick={() => {navigator('/dashboard')}} className={styles.navigationBtns}>dashboard</button>
            <button onClick={() => {navigator('/guest')}} className={styles.navigationBtns}>guest</button>
        </div>
    </div>
  )
}

export default Home