import Showcase from "./showcase/showcase";
import AboutUs from "./section/aboutUs";
import Services from "./section/services";
import Counter from "./section/counter";
import Features from "./section/features";
import GetSupport from "./section/getSupport";
import Team from "./section/team";
import Clients from "./section/clients";
import WhyChoose from "./section/why_choose";
import NewsLetter from "./section/newsletter";
import Footer from "./footer/footer";
import { useEffect } from "react";
import { useState } from "react";



const Home = () => {
    
    const [width, setWidth] = useState(window.innerWidth);

    const setWindowWidth = () => {
        setWidth(window.innerWidth);
    }

    console.log(width);

    useEffect(() => {
        window.addEventListener("resize", setWindowWidth)
    },[])

    return (
        <>

            {width > 1000 || width === 1000 ? (
                <>
                <Showcase />
                <AboutUs />
                <Services />
                <Counter />
                <Features />
                <GetSupport />
                <Team />
                <Clients />
                <WhyChoose />
                <NewsLetter />
                <Footer />
                </>
            ) : (
                <>
                    <div style={{position: "fixed", top: "0", left: "0", background: "#fff", height: "100vh", width: "100%"}} className="_flx _flx_dir_cl _flx_al_ce _flx_ju_ce">
                        <h1>Nothing to show</h1>
                        <h3>Working On it</h3>
                    </div>
                </>
            )}

        </>
    );
}
 
export default Home;