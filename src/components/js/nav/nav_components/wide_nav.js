import { Link } from "react-router-dom";
import free_call_icon from "../../../img/icon/free_call_icon.png"
import brand_logo from "../../../img/logo/logo.png"


const WideNav = () => {

    return (
        <>
            <div className="_wide_nav">
                <div className="_container">
                    <div className="_content">
                        <div className="_flx _flx_al_ce _flx_ju_spbt">
                            <div className="_brand_logo">
                                <a href="">
                                    <img src={brand_logo} alt="" />
                                </a>
                            </div>
                            <div className="_links_and_free_call_num _flx _flx_al_ce">
                                <ul className="_links _flx _flx_al_ce">
                                    <li><Link to={""}>Home</Link></li>
                                    <li><Link to={""}>About</Link></li>
                                    <li><Link to={""}>Pages <i></i></Link></li>
                                    <li><Link to={""}>News <i></i></Link></li>
                                    <li><Link to={""}>Contact Us</Link></li>
                                </ul>
                                <div className="_free_call_num _flx _flx_al_ce">
                                    <div className="_icon">
                                        <img src={free_call_icon} alt="" />
                                    </div>
                                    <div className="_num_text">
                                        <div className="_num">212 386 5575</div>
                                        <div className="_text">Free call</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default WideNav;