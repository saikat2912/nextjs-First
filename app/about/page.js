import styles from '../page.module.css';
import Header from '@/components/about/header';
export default function Home(){
    return(
        <>
        <h1 className={styles.main}>This is about us page</h1>
        <Header/>
        
        </>
    )
}