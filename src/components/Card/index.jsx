import styles from './card.module.css'

const Card = ({learning}) => {
    return(
        <a href={learning.link}>
            <div className={styles.card}>
                <img src={learning.image} alt={learning.title} className={styles.img} />
                <h2 className={styles.title}>{learning.title}</h2>
                <p className={styles.description}>
                    {learning.description}
                </p>
            </div>
        </a>
        
    )
}

export default Card