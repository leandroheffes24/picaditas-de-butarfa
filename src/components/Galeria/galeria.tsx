import styles from './galeria.module.css'
import SinTacc from '../../assets/sin-tacc.png'
import Picada1 from '../../assets/1.webp'
import Picada2 from '../../assets/2.webp'
import Picada3 from '../../assets/3.webp'
import Picada4 from '../../assets/4.webp'
import Picada5 from '../../assets/5.webp'
import Picada6 from '../../assets/6.webp'
import Picada7 from '../../assets/7.webp'
import Picada8 from '../../assets/8.webp'
import Picada9 from '../../assets/9.webp'
import Picada10 from '../../assets/10.webp'
import Picada11 from '../../assets/11.webp'
import Picada12 from '../../assets/12.webp'

export default function Galeria(){
    return(
        <section className={styles.galeriaSection} id='galeria'>
            <div className={styles.titleAndSubtitleContainer}>
                <h3 className={styles.title}>GALERÍA</h3>
                <p className={styles.subTitle}>Una muestra de lo que son nuestras picadas.</p>
            </div>

            <div className={styles.photosContainer}>
                <img className={styles.photo} src={Picada1} alt="Picada 1" />
                <img className={styles.photo} src={Picada2} alt="Picada 2" />
                <img className={styles.photo} src={Picada3} alt="Picada 3" />
                <img className={styles.photo} src={Picada4} alt="Picada 4" />
                <img className={styles.photo} src={Picada5} alt="Picada 5" />
                <img className={styles.photo} src={Picada6} alt="Picada 6" />
                <img className={styles.photo} src={Picada7} alt="Picada 7" />
                <img className={styles.photo} src={Picada8} alt="Picada 8" />
                <img className={styles.photo} src={Picada9} alt="Picada 9" />
                <img className={styles.photo} src={Picada10} alt="Picada 10" />
                <img className={styles.photo} src={Picada11} alt="Picada 11" />
                <img className={styles.photo} src={Picada12} alt="Picada 12" />
            </div>

            <div className={styles.sinTaccContainer}>
                <img className={styles.sinTaccLogo} src={SinTacc} alt="Logo sin tacc" />
                <span className={styles.sinTaccText}>Consultá por opciones sin T.A.C.C.</span>
            </div>
        </section>
    )
}