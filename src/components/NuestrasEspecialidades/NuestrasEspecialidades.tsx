import styles from './nuestrasEspecialidades.module.css'
import Card from './Card/Card'
import PicaditaCincuentaYSiete from '../../assets/picadita-cincuenta-y-siete.webp'
import PicaditaOchentaYCuatro from '../../assets/picadita-ochenta-y-cuatro.webp'
import PicaditaOchentaYSeis from '../../assets/picadita-ochenta-y-seis.webp'
import PicaditaSesentaYNueve from '../../assets/picadita-sesenta-y-nueve.webp'

export default function NuestrasEspecialidades(){
    return(
        <section className={styles.nuestrasEspecialidadesSection} id='nuestras-especialidades'>
            <div className={styles.titleAndSubtitleContainer}>
                <h3 className={styles.title}>NUESTRAS ESPECIALIDADES</h3>
                <p className={styles.subTitle}>Las picadas más solicitadas por los clientes.</p>
            </div>

            <div className={styles.cardsContainer}>
                <Card image={PicaditaCincuentaYSiete} description={"Esta es la famosa Gran Butarfa, la que solo con verla te enamora. Si estás buscando una explosión de sabores, es por acá. Ingresa al catálogo de WhatsApp para más info."}/>
                <Card image={PicaditaOchentaYCuatro} description={"A vos que te gustan las picaditas clásicas, esta es para vos. Ingresa al catálogo de WhatsApp para más info."}/>
                <Card image={PicaditaOchentaYSeis} description={"Amas al queso en todas sus formas? La ButarQuesa vino a hacerte feliz. Ingresa al catálogo de WhatsApp para más info."}/>
                <Card image={PicaditaSesentaYNueve} description={"Si buscas una combinación variada de fiambres y quesos esta es la elección perfecta. Ingresa al catálogo de WhatsApp para más info."}/>
            </div>
        </section>
    )
}