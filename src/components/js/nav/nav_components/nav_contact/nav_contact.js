import { TiMail, TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin, TiSocialPinterest, TiThumbsDown } from "react-icons/ti"



const NavContact = () => {
    return (
        <>
            <div className="_nav_contact">
                <div className="_container">
                    <div className="_content _flx _flx_al_ce">
                        <div className="_flx  _flx_1 _flx_al_ce _flx_ju_spbt">
                            <div className="_lang_and_contact_details _flx _flx_al_ce">
                                <div className="_lang">
                                    <select name="_selsect_lang" id="_selsect_lang" className="_outl_non">
                                        <option value="English">English</option>
                                        <option value="Bangla">Bangla</option>
                                        <option value="Jani Na">Jani Na</option>
                                    </select>
                                </div>
                                <div className="_contact_email">
                                    <a href="mailto:devmeraz87@gmail.com" className="_email _flx _flx_al_ce">
                                        <i className="_icon _flx _flx_al_ce _flx_ju_ce">
                                            <TiMail className="_flx _flx_al_ce" />
                                        </i>
                                        <span>devmeraz87@gmail.com</span>
                                    </a>
                                </div>
                            </div>
                            <div className="_socail_and_get_qu _flx _flx_al_ce">
                                <div className="_social">
                                    <ul className="_flx _flx_al_ce">
                                        <li><a href="/"><i className="_icon _flx _flx_al_ce _select_non"><TiSocialFacebook /></i></a></li>
                                        <li><a href="/"><i className="_icon _flx _flx_al_ce _select_non"><TiSocialTwitter /></i></a></li>
                                        <li><a href="/"><i className="_icon _flx _flx_al_ce _select_non"><TiSocialLinkedin /></i></a></li>
                                        <li><a href="/"><i className="_icon _flx _flx_al_ce _select_non"><TiSocialPinterest /></i></a></li>
                                    </ul>
                                </div>
                                <div className="_get_qu">
                                    <a className="_get_qu_btn" href="">Get A Quote</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default NavContact;