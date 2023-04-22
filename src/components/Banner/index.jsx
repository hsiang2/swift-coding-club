import styles from './banner.module.css'

const Banner = () => {
    return(
        <div className={styles.bg}>
            <div className="container" >
                <h1 className={styles.title}>
                    Swift<br/>Coding<br/>Club
                </h1>
            </div>
        </div>
    )
}

export default Banner