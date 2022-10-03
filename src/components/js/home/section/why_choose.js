import choose_case_icon_1 from "../../../img/whychoose/whychoose_1.png" 
import choose_case_icon_2 from "../../../img/whychoose/whychoose_2.png" 
import choose_case_icon_3 from "../../../img/whychoose/whychoose_3.png" 
import def from "../../../img/def.png"

import why_choose_img from "../../../img/images/why/why.jpg"

const WhyChoose = () => {
    return (
        <>
            <div className="_why_choose">
                <div className="_container">
                    <div className="_content _flx _flx_al_ce _flx_ju_ce">
                        <div className="_why_choose_card">
                            <div className="_why_choose_card_content _flx _flx_al_st _flx_ju_ce">
                                <div className="_card_img">
                                    <img src={why_choose_img} alt="" />
                                </div>
                                <div className="_card_context">
                                    <div className="_card_context_sub_heading _text_bold _text_upcs">Features</div>
                                    <h1 className="_card_context_heading _pre_wrap">
                                        why <span className="_text_normal">Choose </span> Us
                                    </h1>
                                    <div className="_choose_case">
                                        <div className="_case _flx _flx_al_ce">
                                            <div className="_case_icon _flx _flx_al_ce _flx_ju_ce">
                                                <img src={choose_case_icon_1} alt="" />
                                            </div>
                                            <div className="_case_context">
                                                <h3 className="_case_heading">
                                                    Trusted <span className="_text_normal">Vendor</span>
                                                </h3>
                                                <div className="_case_lead">
                                                    Looking cautiously round, to ascertain that the were not overheard, the two hags cowered.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="_case _flx _flx_al_ce">
                                            <div className="_case_icon _flx _flx_al_ce _flx_ju_ce">
                                                <img src={choose_case_icon_2} alt="" />
                                            </div>
                                            <div className="_case_context">
                                                <h3 className="_case_heading">
                                                    Professional <span className="_text_normal">Advisor</span>
                                                </h3>
                                                <div className="_case_lead">
                                                    Looking cautiously round, to ascertain that the were not overheard, the two hags cowered.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="_case _flx _flx_al_ce">
                                            <div className="_case_icon _flx _flx_al_ce _flx_ju_ce">
                                                <img src={choose_case_icon_3} alt="" />
                                            </div>
                                            <div className="_case_context">
                                                <h3 className="_case_heading">
                                                    Award's <span className="_text_normal">Winner</span>
                                                </h3>
                                                <div className="_case_lead">
                                                    Looking cautiously round, to ascertain that the were not overheard, the two hags cowered.
                                                </div>
                                            </div>
                                        </div>
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
 
export default WhyChoose;