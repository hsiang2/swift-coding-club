import styles from './newsItem.module.css'

const NewsItem = ({news, style}) => {
    return(
        <div className={style === 1 ? styles.news1 : styles.news2}>
            <p className={styles.date}>{news.date}</p>
            <a href={news.link} className={styles.title}>
                <div
                    className={styles.titleFade}
                ></div>
                {news.title}
            </a>
            <p className={styles.media}>{news.media}</p>  
        </div>
    )
}

export default NewsItem