import { Icon } from "@iconify/react"
import styles from './footer.module.css'

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={`container ${styles.footerTop}`}>
                <div className={styles.footerLeft}>
                    <div className={styles.footerItem}>
                        <p>課程連結</p>
                        <a>MAIC培訓課程</a>
                        <a>Certiport認證</a>
                        <a>專業學習課程</a>
                        <a>Swift coding社團</a>
                    </div>
                    <div className={styles.footerItem}>
                        <p>比賽資訊</p>
                        <a>移動應用創新賽</a>
                        <a>Swift Student Challenge</a>
                    </div>
                    <div className={styles.footerItem}>
                        <p>相關資訊</p>
                        <a>Apple開發者計畫</a>
                        <a>Human Interface Guidelines</a>
                        <a>Apple加速器</a>
                    </div>
                </div>
                
                <div className={styles.footerItem}>
                    <p>追蹤我們</p>
                    <a>
                        <Icon width='2rem' icon='ph:instagram-logo' />
                    </a>
                </div>
            </div>   
            <div className={styles.footerBottom}>© 2023 Swift Coding Club</div>
        </footer> 
    )
}

export default Footer