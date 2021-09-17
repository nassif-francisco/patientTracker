import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Navbar() {
    const router = useRouter()
    const path = router.pathname

    return (
        <div className="topnav">
            <Link href="/">
                <a className= {path == '/'? 'active':''}>Home</a>
                    </Link>
                    <Link href='/about'>
                <a className= {path == '/about'? 'active':''}>About</a>
            </Link>
        </div>  
    )
  }