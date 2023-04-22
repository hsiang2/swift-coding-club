import Card from '../Card'
import Carousel from '../Carousel'
import styles from './homeContent.module.css'
import learning from "../../json/learning.json"
import news from "../../json/news.json"
import NewsItem from '../NewsItem'
import { Link } from 'react-router-dom'

const HomeContent = () => {
    return(
        <>
            <div className={styles.titleGroup}>
                <h1 className={styles.title}>最新消息</h1>
                <h1 className={styles.subTitle}>Latest News</h1>
            </div>
            <Carousel />
            <div className={styles.titleGroup}>
                <h1 className={styles.title}>課程學習</h1>
                <h1 className={styles.subTitle}>Learning</h1>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                {learning.map((x) => (
                    <Card learning={x} />
                ))}
            </div>
            <div className={styles.titleGroup}>
                <h1 className={styles.title}>相關消息</h1>
                <h1 className={styles.subTitle}>News</h1>
            </div>
            <div>
                {news.map((x, index) => {
                    return index % 2 == 0 ? 
                    <NewsItem news={x} style={1} /> :
                    <NewsItem news={x} style={2}  />
                })}
                <Link to='/' className={styles.btn}>
                    查看更多
                </Link>
            </div>

            
        </>
    )
}

export default HomeContent