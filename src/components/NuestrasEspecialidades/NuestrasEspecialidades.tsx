import styles from './nuestrasEspecialidades.module.css'

export default function NuestrasEspecialidades(){
    return(
        <section className={styles.nuestrasEspecialidadesSection} id='nuestras-especialidades'>
            <div className={styles.titleAndSubtitleContainer}>
                <h3 className={styles.title}>NUESTRAS ESPECIALIDADES</h3>
                <p className={styles.subTitle}>Las picadas más solicitadas por los clientes.</p>
            </div>

            <div className={styles.cardsContainer}>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
            </div>
        </section>
    )
}