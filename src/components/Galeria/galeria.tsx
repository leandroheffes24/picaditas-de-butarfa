import styles from './galeria.module.css'
import Photo from '../../assets/picada.jpg'
import SinTacc from '../../assets/sin-tacc.png'

export default function Galeria(){
    return(
        <section className={styles.galeriaSection} id='galeria'>
            <div className={styles.titleAndSubtitleContainer}>
                <h3 className={styles.title}>GALERÍA</h3>
                <p className={styles.subTitle}>Una muestra de lo que son nuestras picadas.</p>
            </div>

            <div className={styles.photosContainer}>
                <img className={styles.photo} src={Photo} alt="" />
                <img className={styles.photo} src={Photo} alt="" />
                <img className={styles.photo} src={Photo} alt="" />
                <img className={styles.photo} src={Photo} alt="" />
                <img className={styles.photo} src={Photo} alt="" />
                <img className={styles.photo} src={Photo} alt="" />
                <img className={styles.photo} src={Photo} alt="" />
                <img className={styles.photo} src={Photo} alt="" />
                <img className={styles.photo} src={Photo} alt="" />
                <img className={styles.photo} src={Photo} alt="" />
                <img className={styles.photo} src={Photo} alt="" />
                <img className={styles.photo} src={Photo} alt="" />
            </div>

            <div className={styles.sinTaccContainer}>
                <img className={styles.sinTaccLogo} src={SinTacc} alt="Logo sin tacc" />
                <span className={styles.sinTaccText}>Consultá por opciones sin T.A.C.C.</span>
            </div>
        </section>
    )
}