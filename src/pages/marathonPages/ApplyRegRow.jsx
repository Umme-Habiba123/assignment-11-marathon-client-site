import React from 'react';
import { CiCircleRemove } from "react-icons/ci";
import { MdModeEditOutline } from "react-icons/md";



const ApplyRegRow = ({ myApply, index }) => {
  const { firstName, lastName, email, additionalInfo, marathonsTitle, marathonDate } = myApply;

  return (
    <tr className="align-top">
      <th className="text-center">{index + 1}</th>

      <td>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="avatar">
          {/* for img */}
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
  <button className="btn join-item"><CiCircleRemove  size={25}/></button>
  <button className="btn join-item"><MdModeEditOutline  size={21}/></button>

</div>
      </th>
    </tr>
  );
};

export default ApplyRegRow;
