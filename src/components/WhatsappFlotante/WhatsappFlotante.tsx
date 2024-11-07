import styles from './whatsappFlotante.module.css'
import Whatsapp from '../../assets/whatsapp.webp'

export default function WhatsappFlotante(){
    return(
        <a className={styles.whatsappLink} href="https://wa.link/2844t6">
            <img className={styles.whatsappIcon} src={Whatsapp} alt="Whatsapp link" />
        </a>
    )
}