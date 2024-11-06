import React from 'react';
import styles from './card.module.css'

interface CardProps {
    image: string
    description: string
}

const Card: React.FC<CardProps> = ({image, description}) => {
    console.log("PROP => ", image);
    console.log("PROP => ", description);

    return(
        <div className={styles.card} style={{backgroundImage: `url(${image})`}}>
            <div className={styles.description}>{description}</div>
        </div>
    )
}

export default Card