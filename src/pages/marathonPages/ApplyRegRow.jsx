import { CiCircleRemove } from "react-icons/ci";
import { MdModeEditOutline } from "react-icons/md";
import Swal from 'sweetalert2';
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { format } from "date-fns";
import { use } from "react";
import axios from "axios";

const ApplyRegRow = ({ id, myApply, index }) => {
  const { user } = use(AuthContext);

  const {
    _id,
    firstName,
    lastName,
    applicantEmail,
    additionalInfo,
    marathonsTitle,
    contactNumber,
    marathonDate,
  } = myApply;

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      contactNumber: form.contactNumber.value,
      additionalInfo: form.additionalInfo.value,
    };

    try {
      const response = await axios.put(`http://localhost:5000/apply/${_id}`, updatedData);

      if (response.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Registration has been updated successfully.",
        });
        document.getElementById(`modal_${_id}`).close(); // ✅ Close modal after update
      } else {
        Swal.fire({
          icon: "info",
          title: "No Changes",
          text: "No updates were made to this registration.",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "Something went wrong.",
      });
    }
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete the registration of ${firstName} ${lastName}? This action cannot be undone.`,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/apply/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: `${firstName} ${lastName}'s registration has been successfully deleted.`,
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <tr className="align-top">
      <th className="text-center">{index + 1}</th>

      <td>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          {/* <div className="avatar"></div> */}
          <div>
            <div className="font-bold text-base">{firstName} {lastName}</div>
            <div className="text-xs sm:text-sm opacity-50 break-words">{applicantEmail}</div>
          </div>
        </div>
      </td>

      <td className="whitespace-normal max-w-xs">
        {additionalInfo ? (
          <p className="text-sm">{additionalInfo}</p>
        ) : (
          <span className="text-gray-400 italic">No info</span>
        )}
        <p className="text-gray-700 font-bold text-center lg:mt-3 mr-3">Contact : {contactNumber}</p>
      </td>

      <td>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
          <span className="text-base font-semibold">{marathonsTitle}</span>
          <span className="text-lg font-bold">
            {new Date(marathonDate).toISOString().split("T")[0]}
          </span>
        </div>
      </td>

      <th>
        <div className="join join-vertical space-y-3">
          <button
            onClick={handleDelete}
            className="join-item cursor-pointer hover:bg-gray-300 hover:scale-110 rounded-full"
          >
            <CiCircleRemove size={25} />
          </button>

          <button
            className="cursor-pointer hover:scale-110 hover:font-bold join-item"
            onClick={() => {
              document.getElementById(`modal_${_id}`).showModal();
            }}
          >
            <MdModeEditOutline size={21} />
          </button>

          {/* -------- Modal Start -------- */}
          <dialog id={`modal_${_id}`} className="modal overflow-y-auto">
            <div className="modal-box w-11/12 max-w-4xl">
              <form onSubmit={handleUpdate}>
                <div className="w-full sm:w-10/12 mx-auto my-10 sm:my-16 bg-gray-100 p-6 sm:p-10 lg:p-16 rounded shadow">
                  <p className="text-2xl sm:text-3xl mb-8 text-center font-bold">
                    Update Registration Now for the Marathon!
                  </p>

                  <div className="space-y-4">
                    <input
                      type="email"
                      name="email"
                      defaultValue={user?.email || ""}
                      readOnly
                      className="w-full cursor-not-allowed p-2 border border-gray-300 rounded text-gray-500"
                    />

                    <input
                      type="text"
                      defaultValue={marathonsTitle || ""}
                      readOnly
                      className="w-full cursor-not-allowed p-2 border border-gray-300 rounded text-gray-500"
                    />

                    <input
                      type="text"
                      value={format(new Date(marathonDate), "yyyy-MM-dd")}
                      readOnly
                      className="w-full cursor-not-allowed p-2 border border-gray-300 rounded text-gray-500"
                    />

                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      defaultValue={firstName}
                      required
                      className="w-full p-2 border border-gray-300 rounded"
                    />

                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      defaultValue={lastName}
                      required
                      className="w-full p-2 border border-gray-300 rounded"
                    />

                    <input
                      type="tel"
                      name="contactNumber"
                      placeholder="Contact Number"
                      defaultValue={contactNumber}
                      required
                      className="w-full p-2 border border-gray-300 rounded"
                    />

                    <textarea
                      name="additionalInfo"
                      placeholder="Additional Info (Optional)"
                      defaultValue={additionalInfo}
                      className="w-full p-2 border border-gray-300 rounded"
                    ></textarea>
                  </div>

                  <div className="modal-action mt-8 text-center">
                    <button  method="dialog"
                      type="submit"
                      className="bg-purple-200 border-2 border-purple-300 hover:bg-white hover:border-purple-300 transition-all duration-300 text-base sm:text-lg px-8 py-2 sm:px-10 sm:py-3 rounded hover:scale-105"
                    >
                      Update info
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </th>
    </tr>
  );
};

export default ApplyRegRow;
