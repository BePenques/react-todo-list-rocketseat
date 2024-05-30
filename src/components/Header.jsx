import styles from'./Header.module.css'
import igniteLogo from '../assets/Logo.svg';

export function Header(){
    return(
        // <strong className="header">Ignite Feed</strong>
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
        </header>
    )
}