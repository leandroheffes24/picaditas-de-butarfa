import styles from './contacto.module.css'

export default function Contacto(){
    return(
        <section className={styles.contactSection}>
            <div className={styles.titleAndSubtitleContainer}>
                <h3 className={styles.title}>CONTACTO</h3>
                <p className={styles.subTitle}>Comunicate con nosotros para contratar nuestros servicios.</p>
            </div>

            <a className={styles.whatsAppLink} href="https://wa.link/2844t6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.whatsappIcon}>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
                <p className={styles.whatsAppText}>Chatear por WhastApp</p>
            </a>
        </section>
    )
}