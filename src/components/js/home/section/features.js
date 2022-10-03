import feature_img_1 from "../../../img/images/approch/approch_1.jpg"
import feature_img_2 from "../../../img/images/approch/approch_2.jpg"
import feature_img_3 from "../../../img/images/approch/approch_3.jpg"

const Features = () => {

    return (
        <>
            <div className="_features">
                <div className="_container">
                    <div className="_content">
                        <div className="_features_sub_heading _text_upcs _text_bold">Our Approch</div>
                        <h1 className="_features_heading">
                            <span>We Make Data </span>
                            <span className="_text_normal">Work</span>
                        </h1>
                        <div className="_features_grids">
                            <div className="_features_grid_item">
                                <div className="_features_img">
                                    <img src={feature_img_1} alt="" />
                                </div>
                                <div className="_feature_grid_item_context">
                                    <div className="_sub_heading">Customers</div>
                                    <h2 className="_heading">
                                        <div>Daily Grow Of Your</div>
                                        <div>
                                            <span className="_text_normal">Customer </span>
                                            <span>Base</span>
                                        </div>
                                        
                                    </h2>
                                    <div className="_heading_bottom_line"></div>
                                    <div className="_lead">
                                        <div>Each year management consultants in the </div>
                                        <div>United States receive more than $2 billion </div>
                                        <div>for their services.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="_features_grid_item">
                                <div className="_features_img">
                                    <img src={feature_img_2} alt="" />
                                </div>
                                <div className="_feature_grid_item_context">
                                    <div className="_sub_heading">Strategy</div>
                                    <h2 className="_heading">
                                        <div>Get Monthly Reports </div>
                                        <div>
                                            <span className="_text_normal">Increase </span>
                                            <span>Sale </span>
                                        </div>
                                    </h2>
                                    <div className="_heading_bottom_line"></div>
                                    <div className="_lead">
                                        <div>Each year management consultants in the </div>
                                        <div>United States receive more than $2 billion </div>
                                        <div>for their services.</div>
                                    </div>
                                </div>
                            </div>
                                                        <div className="_features_grid_item">
                                <div className="_features_img">
                                    <img src={feature_img_3} alt="" />
                                </div>
                                <div className="_feature_grid_item_context">
                                    <div className="_sub_heading">Team</div>
                                    <h2 className="_heading">
                                        <div>Our Team Of Digital</div>
                                        <div>
                                            <span className="_text_normal">Experts </span>
                                            <span>You</span>
                                        </div>
                                        
                                    </h2>
                                    <div className="_heading_bottom_line"></div>
                                    <div className="_lead">
                                        <div>Each year management consultants in the </div>
                                        <div>United States receive more than $2 billion </div>
                                        <div>for their services.</div>
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
 
export default Features;