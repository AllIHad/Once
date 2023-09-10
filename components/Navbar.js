import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import AuthContext from '../stores/authContext'

export default function Navbar() {

  const { user, login, logout } = useContext(AuthContext)
  console.log(user)

  return (
    <div className="container">
      <nav>
        <Image alt='logo' src="/Twicelogo.png" width={50} height={50} />
        <h1>Once</h1>
        <ul>
          <li><Link href="/" legacyBehavior><a>Home</a></Link></li>
          <li><Link href="/guides" legacyBehavior><a>Guides</a></Link></li>
          {user && <li>{user.user_metadata.full_name}</li>}
          {!user && <li onClick={login} className='btn'>Login/Signup</li>}
          {user && <li onClick={logout} className='btn'>Logout</li>}
        </ul>
      </nav>
      <div className="banner">
        <Image alt='banner' src="/Wall.jpg" width={526} height={316} sizes='100vw' />
      </div>
    </div>
  )
}
