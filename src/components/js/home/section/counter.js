import counter_icon from "../../../img/counter/counter.png"

const Counter = () => {

    return (
        <>
            <div className="_counter">
                <div className="_container">
                    <div className="_content">
                        <div className="_counter_bar _flx _flx_al_ce _flx_ju_spar">
                            <div className="_counter_bar_item _flx _flx_al_st">
                                <div className="_item_icon">
                                    <img src={counter_icon} alt="" />
                                </div>
                                <div className="_counter_number_and_text">
                                    <div className="_number">
                                        <span className="_number_length _text_bold">499</span>
                                        <span>+</span>
                                    </div>
                                    <div className="_text">
                                        Satisfied Clients
                                    </div>
                                </div>
                            </div>
                            <div className="_counter_bar_item _flx _flx_al_st">
                                <div className="_item_icon">
                                    <img src={counter_icon} alt="" />
                                </div>
                                <div className="_counter_number_and_text">
                                    <div className="_number">
                                        <span className="_number_length _text_bold">190</span>
                                        <span>+</span>
                                    </div>
                                    <div className="_text">
                                        Global Office
                                    </div>
                                </div>
                            </div>
                            <div className="_counter_bar_item _flx _flx_al_st">
                                <div className="_item_icon">
                                    <img src={counter_icon} alt="" />
                                </div>
                                <div className="_counter_number_and_text">
                                    <div className="_number">
                                        <span className="_number_length _text_bold">499</span>
                                        <span>+</span>
                                    </div>
                                    <div className="_text">
                                        Loyal Enterprise
                                    </div>
                                </div>
                            </div>
                            <div className="_counter_bar_item _flx _flx_al_st">
                                <div className="_item_icon">
                                    <img src={counter_icon} alt="" />
                                </div>
                                <div className="_counter_number_and_text">
                                    <div className="_number">
                                        <span className="_number_length _text_bold">499</span>
                                        <span>+</span>
                                    </div>
                                    <div className="_text">
                                        Cup Of Coffee
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
 
export default Counter;