import styles from './home.module.css'

export default function Home(){
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const section = document.getElementById("nuestras-especialidades")
        if(section){
            const top = section.getBoundingClientRect().top + window.scrollY - 100
            window.scrollTo({
                top: top,
                behavior: 'smooth'
            })
        }
    }

    return(
        <section className={styles.homeSection} id='home'>
            <div className={styles.homeTextContainer}>
                <h1 className={styles.homeTitle}><span className={styles.titleSpan}>PICADITAS</span> De Butarfa</h1>
                <h2 className={styles.homeSubtitle}>Deliciosas experiencias en cada bocado.</h2>
                <a className={styles.homeLink} href="#nuestras-especialidades" onClick={scrollToSection}>Descubrí nuestras picadas</a>
            </div>
        </section>
    )
}