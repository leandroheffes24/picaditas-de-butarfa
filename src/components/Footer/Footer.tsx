import styles from './footer.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.socialNetworksContainer}>
                <h4 className={styles.footerTitle}>SEGUINOS EN NUESTRAS REDES</h4>
                <div className={styles.socialNetworks}>
                    <a href="https://www.instagram.com/picaditasdebutarfa?igsh=M2VjNTlkM2RqMTk0">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.socialNetworkIcon}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                            <path d="M16.5 7.5v.01" />
                        </svg>
                    </a>

                    <a href="https://www.facebook.com/share/U8Yyk49eWNPQdBpr/">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.socialNetworkIcon}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                    </a>

                    <a href="https://www.tiktok.com/@picaditasdebutarfa?_t=8r7BKTm66HV&_r=1">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.socialNetworkIcon}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className={styles.sectionsContainer}>
                <h4 className={styles.footerTitle}>SECCIONES</h4>
                <nav className={styles.navbar}>
                    <a className={styles.navbarLink} href="#home">Inicio</a>
                    <a className={styles.navbarLink} href="#nuestras-especialidades">Nuestras especialidades</a>
                    <a className={styles.navbarLink} href="#galeria">Galería</a>
                    <a className={styles.navbarLink} href="#preguntas-frecuentes">Preguntas frecuentes</a>
                    <a className={styles.navbarLink} href="#contacto">Contacto</a>
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
                    <span className={styles.contactText}>+54 9 11-2345-6789</span>
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