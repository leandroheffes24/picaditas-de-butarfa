import styles from './home.module.css'

export default function Home(){
    return(
        <section className={styles.homeSection} id='home'>
            <div className={styles.homeTextContainer}>
                <h1 className={styles.homeTitle}><span className={styles.titleSpan}>PICADITAS DE</span> Butarfa</h1>
                <h2 className={styles.homeSubtitle}>Deliciosas experiencias en cada bocado.</h2>
                <a className={styles.homeLink} href="/">Descubrí nuestras picadas</a>
            </div>
        </section>
    )
}