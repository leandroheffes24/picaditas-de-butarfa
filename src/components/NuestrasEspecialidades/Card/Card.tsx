import React from 'react';
import styles from './card.module.css'

interface CardProps {
    image: string
    title: string
    description: string
}

const Card: React.FC<CardProps> = ({image, title, description}) => {
    return(
        <div className={styles.card} style={{backgroundImage: `url(${image})`}}>
            <div className={styles.content}>
                <p className={styles.title}>{title}</p>
                <p>{description}</p>
            </div>
            <p className={styles.clickHereText}>Clickeá para más detalles</p>
        </div>
    )
}

export default Card