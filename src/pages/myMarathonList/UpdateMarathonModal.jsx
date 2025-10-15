import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const UpdateMarathonModal = ({ marathon, onClose, refetch }) => {
  const [axiosSecure] = useAxiosSecure();
  const [title, setTitle] = useState(marathon.title);
  const [location, setLocation] = useState(marathon.location);
  const [marathonDate, setMarathonDate] = useState(new Date(marathon.marathonDate));
  const [description, setDescription] = useState(marathon.description);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedMarathon = {
      title,
      location,
      marathonDate: marathonDate.toISOString().split('T')[0],
      description,
    };

    try {
      const res = await axiosSecure.patch(`/marathons/${marathon._id}`, updatedMarathon);
      if (res.data.modifiedCount > 0) {
        Swal.fire('Success', 'Marathon updated successfully!', 'success');
        refetch();
        onClose();
      }
    } catch (error) {
      Swal.fire('Error', 'Failed to update marathon', 'error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative">
        <button className="absolute right-3 top-3 text-xl" onClick={onClose}>✖</button>
        <h2 className="text-xl font-bold mb-4">Update Marathon</h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold">Title</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Location</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Marathon Date</label>
            <DatePicker
              selected={marathonDate}
              onChange={(date) => setMarathonDate(date)}
              className="input input-bordered w-full"
              dateFormat="yyyy-MM-dd"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Description</label>
            <textarea
              className="textarea textarea-bordered w-full"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMarathonModal;
