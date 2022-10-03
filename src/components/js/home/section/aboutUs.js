import { TiMediaPlay } from "react-icons/ti"

const AboutUs = () => {
    return (
        <>
            <div className="_about_us">
                <div className="_container">
                    <div className="_content">
                        <div className="_flx _flx_al_st">
                            <div className="_section_name_and_heading _flx_1">
                                <div className="_section_name _text_bold _text_upcs">About Us</div>
                                <h1 className="_heading _pre_wrap">
                                    <div className="_text_bold">Our Business</div>
                                    <div className="">
                                        <span className="_text_normal">Experties </span>
                                        <span className="_text_bold">Provide</span>
                                    </div>
                                    <div className="">
                                        <span className="_text_bold" >You The</span>
                                        <span className="_text_normal" >Value</span>
                                    </div>
                                </h1>
                            </div>
                            <div className="_section_lead_and_number _flx_1">
                                <div className="_lead">
                                    <div className="_lead_part">
                                        <p>Each year management consultants in the United State receive more </p>
                                        <p>than $2 billion for their services. 1 Much of this money pays for </p>
                                        <p>impractical data and poorly implemented recommendations.</p>
                                    </div>
                                    <div className="_lead_part">
                                        <p>The article grows out of current research on effective consulting, </p>
                                        <p>including interviews with partners and officers of five well-known </p>
                                        <p>firms. it also stems from my experience supervising beginging </p>
                                        <p>consultants and from the many conversations</p>
                                    </div>
                                </div>
                                <div className="_num_and_num_heading">
                                    <div className="_num_heading"><span className="_text_bold">Call Us</span> for imiditate support this number</div>
                                    <div className="_num _text_bold">+880 876 65 455</div>
                                </div>
                            </div>
                        </div>
                        <div className="_business_inside">
                            <div className="_business_inside_button">
                                <div className="_flx _flx_al_ce _flx_ju_spbt _text_bold">
                                    <span>Business Insight</span>
                                    <span className="_play_button_circle _flx _flx_al_ce _flx_ju_ce" >
                                        <TiMediaPlay />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default AboutUs;