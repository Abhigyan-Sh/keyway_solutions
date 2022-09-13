import React, { useContext } from 'react'
import Navbar from '../components/Navbar.js'
import { useNavigate } from 'react-router-dom'
import { ContextProvider } from '../context/Context.js'
import { RiMenu4Fill } from 'react-icons/ri'

const Dashboard = () => {
  const styles = {
    dashPg: 'flex gradient-bg-welcome',
    navbar: 'basis-2/12 md_cstm:hidden',
    body: 'h-screen flex items-center justify-center basis-10/12 md_cstm:w-full',
    InfoCover: 'blue-glassmorphism w-9/12 h-4/6 p-5',
    userInfo: 'text-white text-2xl',
    guestBtn: 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
    navbarIcon: 'text-white text-xl absolute md_hide:hidden top-10 right-10'
  }
  const navigator = useNavigate()
  const handleClick = () => {
    navigator('/guest')
  }
  const { user } = useContext(ContextProvider)
  console.log(user)
  return (
    <div className={styles.dashPg}>
      <Navbar className={styles.navbar}/>
      <div className={styles.body}>
        <div className = {styles.InfoCover}>
          <p className={styles.userInfo}>username is: {user? user : 'unknown'}</p>
          <button className={styles.guestBtn} onClick= {handleClick}>visit Guest page</button>
        </div>
      </div>
      {/* navIcon */}
      <div className={styles.navbarIcon}>
        <RiMenu4Fill/></div>
    </div>
  )
}

export default Dashboard