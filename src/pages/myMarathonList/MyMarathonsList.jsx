import React, {  } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";


const MyMarathonsList = () => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure();

  const { data: myMarathons = [], isLoading } = useQuery({
    queryKey: ["my-marathons", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-marathons?email=${user.email}`);
      return res.data;
    },
  });

  if (isLoading) return <p>Loading your marathons...</p>;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">My Created Marathons</h2>
      {myMarathons.length === 0 ? (
        <p>You haven't created any marathons yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th>#</th>
                <th>Title</th>
                <th>Location</th>
                <th>Start Reg</th>
                <th>End Reg</th>
                <th>Marathon Date</th>
                <th>Distance</th>
                <th>Total Registered</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myMarathons.map((marathon, index) => (
                <tr key={marathon._id}>
                  <td>{index + 1}</td>
                  <td>{marathon.title}</td>
                  <td>{marathon.location}</td>
                  <td>{new Date(marathon.startRegistration).toLocaleDateString()}</td>
                  <td>{new Date(marathon.endRegistration).toLocaleDateString()}</td>
                  <td>{new Date(marathon.marathonDate).toLocaleDateString()}</td>
                  <td>{marathon.distance}</td>
                  <td>{marathon.totalRegCount}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning mr-2"
                      onClick={() => alert(`Update marathon: ${marathon.title}`)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => alert(`Delete marathon: ${marathon.title}`)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyMarathonsList;
