import { Link } from "react-router-dom"
import styles from './header.module.css'

const Header = () => {
    return(
        <div className={styles.header}>
            <div className={`container ${styles.links}`}>
                <Link to='/about'>相關資訊</Link>
                <Link to='/learning'>學習資源</Link>
                <Link to='/joinus'>加入我們</Link>
                <Link to='/activities'>課程活動</Link>
            </div>
            
        </div>
    )
}

export default Header