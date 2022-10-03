import { useEffect, useState } from "react";
import loading_gif from "../img/images/loading/loading.gif"

const Loading = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    },[])

    return (
        <>
            {loading && (
                <div className="_loading _flx _flx_al_ce _flx_ju_ce">
                    <div className="_loading_png _flx _flx_al_ce _flx_ju_ce">
                        <img src={loading_gif} alt="" />
                    </div>
                </div>
            )}
        </>
    );
}
 
export default Loading;