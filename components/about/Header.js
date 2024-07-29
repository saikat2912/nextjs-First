import Link from "next/link"
import logoImg from '@/assets/logo.png';
import logoImages from '../../assets/logo1.png'
export default function Header(){
    return(
        <>
        <header>
            <div className="logo">
            <Link href="/">
            <img src={logoImg.src} alt="This is logo"/>
            <img src={logoImages} alt="This is logo"/>
            </Link>
            </div>

            <nav>
                <ul>
                    <li><Link href={'/about'}>About Us</Link></li>
                    <li><Link href={'/contact'}>Contact Us</Link></li>
                    <li><Link href={'/meals'}>Meals</Link></li>
                </ul>
            </nav>

        </header>
        
        </>
    )
}