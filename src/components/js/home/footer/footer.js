import footer_logo from "../../../img/logo/footer_logo.png"
import location_ from "../../../img/icon/location.png"
import call_ from "../../../img/icon/call.png"
import email_ from "../../../img/icon/email.png"
import free_call from "../../../img/icon/free_call_icon.png"

const Footer = () => {
    return (
        <>
             <div className="_footer">
                <div className="_footer_context">
                    <div className="_container">
                        <div className="_content">
                            <div className="_grid_items">
                                <div className="_grid_item">
                                    <div className="_brand_logo">
                                        <a href="">
                                            <img src={footer_logo} alt="footer logo" />
                                        </a>
                                    </div>
                                    <div className="_lead">
                                        Bonsi is a global consulting firm with a twist. we
                                        bring big ideas and challenge the norm. we work
                                        with our clients, not at them.
                                    </div>
                                    <div className="_free_call _flx _flx_al_ce">
                                        <div className="_free_call_icon">
                                            <img src={free_call} alt="" />
                                        </div>
                                        <div className="_call_num_text">
                                            <div className="_num _text_bold">212 386 5575</div>
                                            <div className="_text">Free call</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="_grid_item">
                                    <h2 className="_heading">Quick Links</h2>
                                    <ul className="_footer_link_items">
                                        <li className="_footer_link_item">
                                            <a href="/" className="_footer_link">Privacy Policy</a>
                                        </li>
                                        <li className="_footer_link_item">
                                            <a href="/" className="_footer_link">Terms & Condition</a>
                                        </li>
                                        <div className="_footer_link_item">
                                            <a href="/" className="_footer_link">Support</a>
                                        </div>
                                        <div className="_footer_link_item">
                                            <a href="/" className="_footer_link">Contact Us</a>
                                        </div>
                                    </ul>
                                </div>
                                <div className="_grid_item">
                                    <h2 className="_heading">Information</h2>
                                    <ul className="_footer_link_items">
                                        <li className="_footer_link_item">
                                            <a href="/" className="_footer_link">About us</a>
                                        </li>
                                        <li className="_footer_link_item">
                                            <a href="/" className="_footer_link">Customer</a>
                                        </li>
                                        <li className="_footer_link_item">
                                            <a href="/" className="_footer_link">Service</a>
                                        </li>
                                        <li className="_footer_link_item">
                                            <a href="/" className="_footer_link">Collection</a>
                                        </li>
                                        <li className="_footer_link_item">
                                            <a href="/" className="_footer_link">Blog</a>
                                        </li>
                                        <li className="_footer_link_item">
                                            <a href="/" className="_footer_link">BestSellers</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="_grid_item">
                                    <h2 className="_heading">Our Address</h2>
                                    <ul className="_address">
                                        <li className="_address_item _flx _flx_al_st">
                                            <div className="_icon">
                                                <img src={location_} alt="" />
                                            </div>
                                            <div className="_address_text">60 Grant Ave. Central New Road 0708, UK</div>
                                        </li>
                                        <li className="_address_item _flx _flx_al_ce">
                                            <div className="_icon">
                                                <img src={call_} alt="" />
                                            </div>
                                            <div className="_address_text">+880 1846 144 465</div>
                                        </li>
                                        <li className="_address_item _flx _flx_al_ce">
                                            <div className="_icon">
                                                <img src={email_} alt="" />
                                            </div>
                                            <a className="_email_link" href="mailto:devmeraz87@gmail.com">demeraz87@gmail.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_footer_copy">
                    <div className="_container">
                        <div className="_content">
                            <div className="_flx _flx_al_ce _flx_ju_spbt">
                                <div className="_copy_text _pre_wrap">
                                    <span className="_text_bold">&copy; {new Date().getFullYear()} Sultivo Inc </span>
                                    <span>All Rights Reserved.</span>
                                </div>
                                <div className="_text_bold _pre_wrap" style={{color: "#fff"}}><span>Created By </span><a title="Tap Tap" href="https://web.facebook.com/profile.php?id=100043143293016">Mevlan Meraj</a></div>
                                <div className="_link">
                                    <a href="">About Us</a>
                                    <span className="_gray">| </span>
                                    <a href="">FAQ'S</a>
                                    <span className="_gray">| </span>
                                    <a href="">Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </>
    );
}
 
export default Footer;