import styles from './footer.module.css'
import { scrollToSection } from '../../utils/scrollToSection'
import Facebook from '../../assets/facebook.webp'
import Instagram from '../../assets/instagram.webp'
import Tiktok from '../../assets/tiktok.webp'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.socialNetworksContainer}>
                <h4 className={styles.footerTitle}>SEGUINOS EN NUESTRAS REDES</h4>
                <div className={styles.socialNetworks}>
                    <a href="https://www.instagram.com/picaditasdebutarfa?igsh=M2VjNTlkM2RqMTk0">
                        <img className={styles.footerLogo} src={Instagram} alt="Instagram logo" />
                    </a>

                    <a href="https://www.facebook.com/share/U8Yyk49eWNPQdBpr/">
                        <img className={styles.footerLogo} src={Facebook} alt="Instagram logo" />
                    </a>

                    <a href="https://www.tiktok.com/@picaditasdebutarfa?_t=8r7BKTm66HV&_r=1">
                        <img className={styles.footerLogo} src={Tiktok} alt="Instagram logo" />
                    </a>
                </div>
            </div>

            <div className={styles.sectionsContainer}>
                <h4 className={styles.footerTitle}>SECCIONES</h4>
                <nav className={styles.navbar}>
                    <a onClick={scrollToSection} className={styles.navbarLink} href="#home">Inicio</a>
                    <a onClick={scrollToSection} className={styles.navbarLink} href="#nuestras-especialidades">Nuestras especialidades</a>
                    <a onClick={scrollToSection} className={styles.navbarLink} href="#galeria">Galería</a>
                    <a onClick={scrollToSection} className={styles.navbarLink} href="#preguntas-frecuentes">Preguntas frecuentes</a>
                    <a onClick={scrollToSection} className={styles.navbarLink} href="#contacto">Contacto</a>
                </nav>
            </div>

            <div className={styles.contactContainer}>
                <h4 className={styles.footerTitle}>CONTACTO</h4>
                <div className={styles.contactInfo}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.contactIcon}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
                        <path d="M11 4h2" />
                        <path d="M12 17v.01" />
                    </svg>
                    <span className={styles.contactText}>+54 9 11-5470-1577</span>
                </div>
            </div>

            <div className={styles.separator}></div>

            <div className={styles.copyrightAndDeveloperContainer}>
                <span className={styles.copyrightText}>© Todos los derechos reservados.</span>
                <span className={styles.developerText}>Desarrollado por <a className={styles.developerLink} href="https://leandroheffes.com.ar">Leandro Heffes</a></span>
            </div>
        </footer>
    )
}