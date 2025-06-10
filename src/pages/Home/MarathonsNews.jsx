import { use } from "react";
import MarathonCard from "./MarathonCard";


const MarathonsNews = ({ marathonPromise }) => {

    console.log(marathonPromise)

    const marathons = use(marathonPromise)

    return (
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 mx-auto ">
            <h1 className="text-4xl font-semibold text-center mb-10 edu-nsw-act-cursive-font ">Our flexible running program</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-5 md:gap-8 gap-6 ">
                {
                    marathons.map((marathon => <MarathonCard marathon={marathon}></MarathonCard>))
                }
            </div>
        </div>
    );
};

export default MarathonsNews; 