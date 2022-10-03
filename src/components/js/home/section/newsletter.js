import { AiOutlineMail } from "react-icons/ai"
import message_icon from "../../../img/icon/messageopen.png"

const NewsLetter = () => {
    return (
        <>
            <div className="_newsletter">
                <div className="_container">
                    <div className="_content _flx">
                        <div className="_newsletter_card _flx _flx_al_ce _flx_ju_ce">
                            <div className="_newsletter_context">
                                <div className="_back_ground_image">
                                    <img src={message_icon} alt="" />
                                </div>
                                <div className="_context_content">
                                    <div className="_newsletter_sub_heading _text_upcs _text_bold">Newsletter</div>
                                    <h2 className="_newsletter_heading">
                                        <div>Subscribe To Our</div>
                                        <div className="_text_normal">Newsletter</div>
                                    </h2>
                                    <form className="_subscribe_form">
                                        <div className="_input_group _flx _flx_al_ce">
                                            <input className="_form_control _outl_non" type="text" placeholder="Enter your email address" />
                                            <button className="_button _flx _flx_al_ce _flx_ju_ce">
                                                <i className="_flx _flx_al_ce _flx_ju_ce"><AiOutlineMail /></i>
                                                <span className="_text_bold _text_upcs">Subscribe</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="_newsletter_blank"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default NewsLetter;