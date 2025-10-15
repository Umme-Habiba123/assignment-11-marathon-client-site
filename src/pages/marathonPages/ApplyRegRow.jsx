import React, { useContext } from "react";
import Swal from "sweetalert2";
import { CiCircleRemove } from "react-icons/ci";
import { MdModeEditOutline } from "react-icons/md";
import { format } from "date-fns";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ApplyRegRow = ({ id, myApply, index, onUpdateSuccess, onDeleteSuccess }) => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

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
      const response = await axiosSecure.put(`/apply/${_id}`, updatedData);

      if (response.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Registration has been updated successfully.",
          timer: 2000,
          showConfirmButton: false,
        });
        document.getElementById(`modal_${_id}`).close();

      
        if (onUpdateSuccess) onUpdateSuccess();
      } else {
        Swal.fire({
          icon: "info",
          title: "No Changes",
          text: "No updates were made to this registration.",
          timer: 2000,
          showConfirmButton: false,
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


  const handleDelete = async () => {
    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete the registration of ${firstName} ${lastName}. This action cannot be undone!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmResult.isConfirmed) {
      try {
        const response = await axiosSecure.delete(`/apply/${_id}`);
        if (response.data.deletedCount) {
          Swal.fire({
            title: "Deleted!",
            text: "Registration has been deleted successfully.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });


          if (onDeleteSuccess) onDeleteSuccess(_id);
        }
      } catch (error) {
        console.error("Delete error:", error);
        Swal.fire({
          icon: "error",
          title: "Delete Failed",
          text: "Could not delete registration. Try again.",
        });
      }
    }
  };

  return (
    <tr className="align-top hover:bg-gray-50 transition-colors duration-200">
      <th className="text-center text-gray-700 font-semibold">{index + 1}</th>

      <td>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div>
            <div className="font-semibold text-lg text-gray-800">
              {firstName} {lastName}
            </div>
            <div className="text-sm text-gray-500 break-words">{applicantEmail}</div>
          </div>
        </div>
      </td>

      <td className="max-w-xs whitespace-normal">
        {additionalInfo ? (
          <p className="text-sm text-gray-700">{additionalInfo}</p>
        ) : (
          <span className="italic text-gray-400">No info</span>
        )}
        <p className="mt-2 text-gray-600 font-semibold text-center lg:mt-3">
          Contact: <span className="text-indigo-600">{contactNumber}</span>
        </p>
      </td>

      <td>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
          <span className="text-base font-semibold text-indigo-700">{marathonsTitle}</span>
          <span className="text-lg font-bold text-gray-900">
            {format(new Date(marathonDate), "yyyy-MM-dd")}
          </span>
        </div>
      </td>

      <th className="space-y-2 flex flex-col items-center justify-center">
        <button
          onClick={handleDelete}
          title="Delete Registration"
          className="rounded-full p-2 bg-red-100 text-red-600 hover:bg-red-200 transition"
          aria-label="Delete"
        >
          <CiCircleRemove size={26} />
        </button>

        <button
          onClick={() => document.getElementById(`modal_${_id}`).showModal()}
          title="Edit Registration"
          className="rounded-full p-2 bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition"
          aria-label="Edit"
        >
          <MdModeEditOutline size={24} />
        </button>

        {/* Modal */}
        <dialog
          id={`modal_${_id}`}
          className="modal bg-black bg-opacity-30 backdrop-blur-sm"
          style={{ border: "none", borderRadius: "10px" }}
        >
          <div className="modal-box max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg relative">
            <form onSubmit={handleUpdate} className="space-y-6">
              <h3 className="text-2xl font-bold text-center text-indigo-700 mb-6">
                Update Marathon Registration
              </h3>

              <input
                type="email"
                name="email"
                defaultValue={user?.email || ""}
                readOnly
                className="w-full bg-gray-100 text-gray-600 p-3 rounded-md border border-gray-300 cursor-not-allowed"
              />

              <input
                type="text"
                defaultValue={marathonsTitle || ""}
                readOnly
                className="w-full bg-gray-100 text-gray-600 p-3 rounded-md border border-gray-300 cursor-not-allowed"
              />

              <input
                type="text"
                value={format(new Date(marathonDate), "yyyy-MM-dd")}
                readOnly
                className="w-full bg-gray-100 text-gray-600 p-3 rounded-md border border-gray-300 cursor-not-allowed"
              />

              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                defaultValue={firstName}
                required
                className="w-full p-3 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                defaultValue={lastName}
                required
                className="w-full p-3 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                defaultValue={contactNumber}
                required
                className="w-full p-3 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <textarea
                name="additionalInfo"
                placeholder="Additional Info (Optional)"
                defaultValue={additionalInfo}
                className="w-full p-3 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                rows={4}
              ></textarea>

              <div className="modal-action flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-8 py-2 rounded-md hover:bg-indigo-700 transition"
                >
                  Update Info
                </button>
                <button
                  type="button"
                  onClick={() => document.getElementById(`modal_${_id}`).close()}
                  className="ml-4 px-6 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </th>
    </tr>
  );
};

export default ApplyRegRow;
