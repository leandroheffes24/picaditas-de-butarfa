import styles from './preguntaFrecuente.module.css'
import React from 'react'

interface PreguntaFrecuenteProps{
    title: string
    description: string
    id: string
}

const preguntaFrecuente: React.FC<PreguntaFrecuenteProps> = ({title, description, id}) => {
    const preguntaFrecuenteFunction = (id: string) => {
        const preguntaText = document.getElementById(id)
        if(preguntaText){
            preguntaText.style.display = preguntaText.style.display === "block" ? 'none' : "block"
        }
    }

    return(
        <div className={styles.preguntaContainer}>
            <div className={styles.preguntaTitleContainer} onClick={() => preguntaFrecuenteFunction(id)}>
                <span className={styles.preguntaTitle}>{title}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.preguntaTitleIcon}>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 5l0 14" />
                    <path d="M18 13l-6 6" />
                    <path d="M6 13l6 6" />
                </svg>
            </div>
            <span className={styles.preguntaText} id={id}>{description}</span>
        </div>
    )
}

export default preguntaFrecuente