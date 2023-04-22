
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HomeContent from "../components/HomeContent"

const HomePage = () => {
    return(
        <div className="mainLayout">
                {/* <Helmet><title>Attimo Pizzeria</title></Helmet> */}
            <Header />
            <div className="layoutContent">
                <Banner />
                <div className="container">
                    <HomeContent />
                </div>
            </div>
            <Footer className="layoutFooter" />
        </div>
    )
}

export default HomePage