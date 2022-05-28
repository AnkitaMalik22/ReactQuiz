import styles from '../styles/NotFound.module.css'
import Link from 'next/link';

const NotFound = () => {
    return (  
        <div className={styles.container}>
        <div className={styles.notFound}>
            <h1 className={styles.h1}>Oopss...</h1>
            <h2 className={styles.h2}>That Page can not be found </h2>
            <p className={styles.p}>go back to the <Link href='/'><a  className={styles.a}>Play Quiz Page</a></Link></p>
        </div>
        </div>
    );
}
 
export default NotFound;