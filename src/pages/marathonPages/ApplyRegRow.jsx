
import { CiCircleRemove } from "react-icons/ci";
import { MdModeEditOutline } from "react-icons/md";
import { Link } from "react-router";
import Swal from 'sweetalert2';




const ApplyRegRow = ({ id, myApply, index }) => {

    const { firstName, lastName, email, additionalInfo, marathonsTitle, marathonDate } = myApply;


    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: `You are about to delete the registration of ${firstName} ${lastName} ? This action cannot be undone.`,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/apply/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `${firstName} ${lastName}'s registration has been successfully deleted.`,
                                icon: "success"
                            });

                            
                        }
                    })

            }
        });
    }

    return (
        <tr className="align-top">
            <th className="text-center">{index + 1}</th>

            <td>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <div className="avatar">
                        {/*------img */}
                    </div>
                    <div>
                        <div className="font-bold text-base">{firstName} {lastName}</div>
                        <div className="text-xs sm:text-sm opacity-50 break-words">{email}</div>
                    </div>
                </div>
            </td>

            <td className="whitespace-normal max-w-xs">
                {additionalInfo ? (
                    <p className="text-sm">{additionalInfo}</p>
                ) : (
                    <span className="text-gray-400 italic">No info</span>
                )}
            </td>

            <td>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                    <span className="text-sm edu-nsw-act-cursive-font font-semibold">
                        {new Date(marathonDate).toISOString().split("T")[0]}
                    </span>
                    <span className="text-base font-semibold">{marathonsTitle}</span>
                </div>
            </td>

            <th>
                <div className="join join-vertical space-y-3">
                    <button onClick={()=>handleDelete(UserActivation._id)} className=" join-item cursor-pointer hover:bg-gray-300 hover:scale-120 rounded-full"><CiCircleRemove size={25} /></button>

                   <Link to={`/updateApplyInfo/${id}`}>
                    <button className=" cursor-pointer hover:scale-120 hover:font-bold  join-item "><MdModeEditOutline size={21} /></button>
                   </Link>

                </div>
            </th>
        </tr>
    );
};

export default ApplyRegRow;
