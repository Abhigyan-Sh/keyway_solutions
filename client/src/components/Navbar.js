import logo from '../assets/tangled.png'
import { GoHome } from 'react-icons/go'
import { IoIosLogIn,IoMdNotificationsOutline, IoIosLogOut } from 'react-icons/io'
import { FiSettings } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'
import { FaFeather } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  const style = {
    "navbar_container": "border-r-1 h-screen flex flex-col justify-between items-center overflow-hidden sticky top-0 bg-transparent md_cstm:hidden",
    "logo": "w-24 mt-9",
    "navIconsCov": "flex flex-col justify-between items-center gap-y-16",
    "loginBtn": "py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
    'profile_icon':'rounded-full w-12 h-12 mb-8',
    'nonValidIcons': 'cursor-not-allowed',
    'navIcons': '',
  }
  const navigator = useNavigate()
  const PF = 'http://localhost:8000/image/'
  const toLoginPg = () => {
    navigator('/login')
  }
  const user = localStorage.getItem('user')
  const toLogoutPg = () => {
    localStorage.removeItem('user')
    window.location.replace('http://localhost:3000/')
  }
  return (
    <div className= {style.navbar_container}>
      <Link to='/'>
        <img src= {logo} alt='logo- passion fruit' className= {style.logo}/>
      </Link>
      <div className= {style.navIconsCov}>
        <IconContext.Provider value={{color: 'grey', size: '25px'}}>
          <Link to='/'><GoHome className={style.navIcons}/></Link>
          <Link to='/settings/'><FiSettings className={style.navIcons}/></Link>
          <BsBookmark className= {style.nonValidIcons}/>
          <IoMdNotificationsOutline className= {style.nonValidIcons}/>
        </IconContext.Provider>
        
        <IconContext.Provider value={{color: 'grey', size: '25px'}}>
          <Link to={`/write/`}><FaFeather className={style.navIcons}/></Link>
        </IconContext.Provider>
      </div>
      {!user ? (
        <div>
          <button type="button" className= {style.loginBtn} onClick={toLoginPg}>
            <IconContext.Provider value={{color: 'grey', size: '25px'}}>
              <IoIosLogIn/>
            </IconContext.Provider>
            login/<br/>
            register
          </button>
        </div>
        ) : (
          <button type="button" className= {style.loginBtn} onClick={toLogoutPg}>
            <IconContext.Provider value={{color: 'grey', size: '25px'}}>
              <IoIosLogOut/>
            </IconContext.Provider>
            logout
          </button>
        )}
        <Link to='/settings/'>
          <img src= {PF + 'user_profile.png'} className={style.profile_icon} alt='profile icon'/>
        </Link>
    </div>
  )
}

export default Navbar