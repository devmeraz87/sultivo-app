import showcase_background from "../../../img/showcase.png"
import showcase_image from "../../../img/images/showcase/showcase.jpg"

const Showcase = () => {

    return (
        <>
            <div className="_showcase">
                <div className="_container">
                    <div className="_content">
                        <div className="_showcase_background _select_non _flx _flx_al_ce _flx_ju_en">
                            <img src={showcase_background} alt="Showcase Background" />
                        </div>
                        <div className="_showcase_image _select_non _flx _flx_al_ce _flx_ju_en">
                            <div className="_context_img _flx _flx_al_ce _flx_ju_en">
                                <img src={showcase_image} alt="Showcase Context Image" />
                            </div>
                        </div>
                        <div className="_showcase_context _flx _flx_al_ce">
                            <div className="_context">
                                <div className="_sub_heading _pre_wrap">
                                    <span className="_text_bold _text_upcs" >Consulting </span>
                                    <span className="_text_bold _text_upcs" >| </span>
                                    <span className="_text_bold _text_upcs" >Leadership </span>
                                    <span className="_text_bold _text_upcs" >| </span>
                                    <span className="_text_bold _text_upcs" >Fundraise</span>
                                </div>
                                <h1 className="_heading _pre_wrap">
                                    <div className="_text_bold">Financial</div>
                                    <div className="">
                                        <span className="_text_normal _investment">Investment </span>
                                        <span className="_text_bold">Market</span>
                                    </div>
                                </h1>
                                <p className="_lead">The Market Can Price Things Wrong, We Don't!</p>
                                <form className="_get_qu_form">
                                    <div className="_input_group _flx _flx_al_ce">
                                        <input className="_form_control _flx_1 _outl_non"  type="email" placeholder="Enter email address"/>
                                        <button className="_get_qu_form_btn _text_upcs _text_bold">Get a free quote</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Showcase;