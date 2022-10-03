import service_icon_1 from "../../../img/services/services_1.png";
import service_icon_2 from "../../../img/services/services_2.png";
import service_icon_3 from "../../../img/services/services_3.png";
import service_icon_4 from "../../../img/services/services_4.png";
import service_num_icon_1 from "../../../img/services/01.png";
import service_num_icon_2 from "../../../img/services/02.png";
import service_num_icon_3 from "../../../img/services/03.png";
import service_num_icon_4 from "../../../img/services/04.png";


const Services = () => {

    return (
        <>
            <div className="_services">
                <div className="_container">
                    <div className="_content">
                        <div className="_flx _flx_al_ce _flx_ju_st">
                            <div className="_services_card">
                                <div className="_services_card_content">
                                    <div className="_card_grid_items">
                                        <div className="_card_grid_item _flx _flx_al_st">
                                            <div className="_card_service_icon_and_num">
                                                <div className="_icon">
                                                    <img src={service_icon_1} alt="" />
                                                </div>
                                                <div className="_num">
                                                    <img src={service_num_icon_1} alt="" />
                                                </div>
                                            </div>
                                            <div className="_card_context">
                                                <div className="_card_context_heading _text_bold">Finance & Banking</div>
                                                <div className="_card_context_lead">We offer management consulting service with including interim management and on ground operational support</div>
                                            </div>
                                        </div>
                                        <div className="_card_grid_item _flx _flx_al_st">
                                            <div className="_card_service_icon_and_num">
                                                <div className="_icon">
                                                    <img src={service_icon_3} alt="" />
                                                </div>
                                                <div className="_num">
                                                    <img src={service_num_icon_3} alt="" />
                                                </div>
                                            </div>
                                            <div className="_card_context">
                                                <div className="_card_context_heading _text_bold">Sales & Trading</div>
                                                <div className="_card_context_lead">We offer management consulting service with including interim management and on ground operational support</div>
                                            </div>
                                        </div>
                                        <div className="_card_grid_item _flx _flx_al_st">
                                            <div className="_card_service_icon_and_num">
                                                <div className="_icon">
                                                    <img src={service_icon_2} alt="" />
                                                </div>
                                                <div className="_num">
                                                    <img src={service_num_icon_2} alt="" />
                                                </div>
                                            </div>
                                            <div className="_card_context">
                                                <div className="_card_context_heading _text_bold">Google Analysis</div>
                                                <div className="_card_context_lead">We offer management consulting service with including interim management and on ground operational support</div>
                                            </div>
                                        </div>
                                        <div className="_card_grid_item _flx _flx_al_st">
                                            <div className="_card_service_icon_and_num">
                                                <div className="_icon">
                                                    <img src={service_icon_4} alt="" />
                                                </div>
                                                <div className="_num">
                                                    <img src={service_num_icon_4} alt="" />
                                                </div>
                                            </div>
                                            <div className="_card_context">
                                                <div className="_card_context_heading _text_bold">Investment & Advise</div>
                                                <div className="_card_context_lead">We offer management consulting service with including interim management and on ground operational support</div>
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
 
export default Services;