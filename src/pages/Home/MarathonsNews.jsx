import { use } from "react";
import MarathonCard from "./MarathonCard";


const MarathonsNews = ({marathonPromise}) => {

    const marathons=use(marathonPromise)

    return (
        <div className="w-7/12 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-20">
            {
                marathons.map((marathon=><MarathonCard marathon={marathon}></MarathonCard>))
            }
        </div>
    );
};

export default MarathonsNews;