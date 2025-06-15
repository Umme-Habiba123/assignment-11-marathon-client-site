import { use } from "react";
import ApplyRegRow from "./ApplyRegRow";

const MyApplyList = ({myAppyPromise}) => {
  console.log(myAppyPromise)
    const registration=use(myAppyPromise)  
  


    return (
        <div className="w-8/12 mx-auto poppins-extralight">
            <p className="mt-5 text-center text-3xl edu-nsw-act-cursive-font font-semibold">Total Registration with this id : {registration.length}</p>
           <div className="overflow-x-auto">
  <table className="table my-10">
    {/* head */}
    <thead>
      <tr>
        <th>
       <h1 className="text-xl">#</h1>
        </th>
        <th>Name and Email</th>
        <th>Additional Info.</th>
        <th>Marathons Date & Title</th>
        <th></th>
      </tr>
    </thead>
    <tbody className="fira-sans-extralight">
      {
        registration.map((myApply,index)=>(
           <ApplyRegRow index={index} myApply={myApply} key={myApply._id}></ApplyRegRow> 
        ))
      }
     
    </tbody>
  
  </table>
</div>
        </div>
    );
};

export default MyApplyList;