import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="container">
      <nav>
        <Image src="/Twicelogo.png" width={50} height={50} />
        <h1>Once</h1>
        <ul>
          <li><Link href="/" legacyBehavior><a>Home</a></Link></li>
          <li><Link href="/guides" legacyBehavior><a>Guides</a></Link></li>
        </ul>
      </nav>
      <div className="banner">
        <Image src="/Wall.jpg" width={526} height={316} sizes='100vw'/>
      </div>
    </div>
  )
}
