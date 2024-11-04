import styles from './home.module.css'

export default function Home(){
    return(
        <section className={styles.homeSection}>
            <div className={styles.homeTextContainer}>
                <h1 className={styles.homeTitle}><span className={styles.titleSpan}>PICADITAS</span> de Butarfa</h1>
                <h2 className={styles.homeSubtitle}>Deliciosas experiencias en cada bocado.</h2>
                <a className={styles.homeLink} href="/">Descubrí nuestras picadas</a>
            </div>
        </section>
    )
}