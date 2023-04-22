import { Icon } from '@iconify/react'
import { Button, Carousel } from 'antd'
import { useRef } from 'react'
import styles from './carousel.module.css'
import latestNews from '../../json/latestNews.json'

const NewsCarousel = () => {
    const carouselEL = useRef(null)
    return(
                
            <div style={{ maxWidth: '100vw', position: 'relative'}}>
                <Button
                        className={styles.leftBtn}
                        style={{}}
                        onClick={() => {
                            carouselEL.current.prev()
                        }}
                        icon={<Icon icon='material-symbols:arrow-back-ios-new-rounded'/>}
                ></Button>
                    <Carousel
                        // autoplay
                        // style={{background: 'red'}}
                        ref={carouselEL}
                    >
                        {latestNews.map((x) => 
                            <a href={x.link}>
                                <div className={styles.carouselItem}>
                                    <img src={x.image} alt={x.title}
                                        className={styles.carouselImg} 
                                    />
                                    <img src='images/bg_triangle.png' className={styles.carouselTriangle} /> 
                                    <div className={styles.carouselText}>
                                        <div className={styles.carouselYear}>{x.year}</div>
                                        <div className={styles.carouselTitle}>{x.title}</div>
                                    </div>
                                    
                                    {/* <div className={styles.carouselTriangle}>
                                        <div className={styles.carouselYear}>{x.year}</div>
                                        <div className={styles.carouselTitle}>{x.title}</div>
                                    </div> */}
                                </div>
                            </a>
                            
                        )}
                    </Carousel>
                    <Button
                        className={styles.rightBtn}
                        style={{}}
                        onClick={() => {
                            carouselEL.current.next()
                        }}
                        icon={<Icon icon='material-symbols:arrow-forward-ios-rounded'/>}
                ></Button>
            </div>
    )
}

export default NewsCarousel