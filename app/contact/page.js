import Link from "next/link"
import styles from '../page.module.css'
export default function BlogPage(){
    return(
    <main className={styles.main}>
        <h1>Contact us</h1>
        <p><Link href="/contact/contact-1">Contact 1</Link></p>
        <p><Link href="/contact/contact-2">Contact 2</Link></p>
    </main>)
}