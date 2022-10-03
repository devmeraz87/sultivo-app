import client_1 from "../../../img/clients/1.png"
import client_2 from "../../../img/clients/2.png"
import client_3 from "../../../img/clients/3.png"
import client_4 from "../../../img/clients/4.png"
import client_5 from "../../../img/clients/5.png"

const Clients = () => {

    return (
        <>
            <div className="_clients">
                <div className="_container">
                    <div className="_content">
                        <div className="_clients_links _flx _flx_al_ce _flx_ju_spbt">
                           <div className="_client">
                                <a href="">
                                    <img className="_client_logo" src={client_1} alt="" />
                                </a>
                           </div>
                           <div className="_client">
                                <a href="">
                                    <img className="_client_logo" src={client_2} alt="" />
                                </a>
                           </div>
                           <div className="_client">
                                <a href="">
                                    <img className="_client_logo" src={client_3} alt="" />
                                </a>
                           </div>
                           <div className="_client">
                                <a href="">
                                    <img className="_client_logo" src={client_4} alt="" />
                                </a>
                           </div>
                           <div className="_client">
                                <a href="">
                                    <img className="_client_logo" src={client_5} alt="" />
                                </a>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Clients;