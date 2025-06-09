import { use } from "react";


const MarathonsNews = ({marathonPromise}) => {

    const marathons=use(marathonPromise)

    return (
        <div>
            <h1>{marathons.length}</h1>
        </div>
    );
};

export default MarathonsNews;