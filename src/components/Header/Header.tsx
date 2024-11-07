import styles from './header.module.css'
import Logo from '../../assets/logo.webp'
import { useState } from 'react'
import { scrollToSection } from '../../utils/scrollToSection'

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        toggleMenu()
        scrollToSection(e)
    }

    return(
        <header className={styles.header}>
            <div className={styles.infoHeader}>
                <span className={styles.infoHeaderText}>TODAS LAS PICADAS INCLUYEN PAN DE CAMPO</span>
            </div>

            <div className={styles.headerAndNavbarContainer}>
                <div className={styles.logoContainer}>
                    <a className={styles.logoLink} href="/">
                        <img className={styles.logo} src={Logo} alt="Logo Picaditas de Butarfa" />
                    </a>
                </div>

                <div className={styles.openNavbarButtonContainer}>
                    <button className={styles.openNavbarButton} onClick={toggleMenu}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" className={styles.openNavbarIcon}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 6l16 0" />
                            <path d="M4 12l16 0" />
                            <path d="M4 18l16 0" />
                        </svg>
                    </button>
                </div>

                <div className={styles.contactContainer}>
                    <p className={styles.contactText}><span className={styles.contactTitle}>CONTACTO:</span> +54 9 11-2345-6789</p>
                </div>

                <div className={styles.separator}></div>

                {isMenuOpen && (
                    <nav className={styles.mobileNavbar}>
                        <ul className={styles.navbarList}>
                            <li className={styles.navbarItem}>
                                <a onClick={handleMenuClick} className={styles.navbarLink} href="#home">Inicio</a>
                            </li>

                            <li className={styles.navbarItem}>
                                <a onClick={handleMenuClick} className={styles.navbarLink} href="#nuestras-especialidades">Nuestras especialidades</a>
                            </li>

                            <li className={styles.navbarItem}>
                                <a onClick={handleMenuClick} className={styles.navbarLink} href="#galeria">Galería</a>
                            </li>

                            <li className={styles.navbarItem}>
                                <a onClick={handleMenuClick} className={styles.navbarLink} href="#preguntas-frecuentes">Preguntar frecuentes</a>
                            </li>

                            <li className={styles.navbarItem}>
                                <a onClick={handleMenuClick} className={styles.navbarLink} href="#contacto">Contacto</a>
                            </li>
                        </ul>
                    </nav>
                )}

                <nav className={styles.desktopNavbar}>
                    <ul className={styles.desktopNavbarList}>
                        <li className={styles.desktopNavbarItem}>
                            <a onClick={scrollToSection} className={styles.desktopNavbarLink} href="#home">Inicio</a>
                        </li>

                        <li className={styles.desktopNavbarItem}>
                            <a onClick={scrollToSection} className={styles.desktopNavbarLink} href="#nuestras-especialidades">Nuestras especialidades</a>
                        </li>

                        <li className={styles.desktopNavbarItem}>
                            <a onClick={scrollToSection} className={styles.desktopNavbarLink} href="#galeria">Galería</a>
                        </li>

                        <li className={styles.desktopNavbarItem}>
                            <a onClick={scrollToSection} className={styles.desktopNavbarLink} href="#preguntas-frecuentes">Preguntas frecuentes</a>
                        </li>

                        <li className={styles.desktopNavbarItem}>
                            <a onClick={scrollToSection} className={styles.desktopNavbarLink} href="#contacto">Contacto</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}