import React, { useEffect, useState, useCallback } from "react";
import ApplyRegRow from "./ApplyRegRow";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const MyApplyList = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [registration, setRegistration] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchRegistration = useCallback(() => {
    if (user?.email) {
      setLoading(true);
      axiosSecure
        .get(`/apply?email=${user.email}`)
        .then((res) => {
          setRegistration(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to load registration:", err);
          setLoading(false);
        });
    }
  }, [user, axiosSecure]);

  useEffect(() => {
    fetchRegistration();
  }, [fetchRegistration]);

 
  const handleDelete = async (id) => {
    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmResult.isConfirmed) {
      try {
        await axiosSecure.delete(`/apply/${id}`); 
        setRegistration((prev) => prev.filter((item) => item._id !== id));
        Swal.fire("Deleted!", "Your registration has been deleted.", "success");
      } catch (error) {
        Swal.fire("Error!", "Failed to delete registration.", "error");
      }
    }
  };

  const filterRegistration = registration.filter((myApply) => {
    const title = myApply.marathonsTitle?.toLowerCase() || "";
    return title.startsWith(value.toLowerCase());
  });

  const onChange = (e) => setValue(e.target.value);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 poppins-extralight">
      <Helmet>
        <title>myApplyList || raceClock</title>
        <meta name="description" content="Nested component" />
      </Helmet>

   
      <div className="mt-10">
        <label>
          <input
            onChange={onChange}
            type="search"
            value={value}
            required
            className="outline-none flex-grow border-2 border-purple-300 focus:ring-2 focus:ring-blue-400 px-4 py-2 rounded w-full sm:w-96"
            placeholder="Search"
          />
        </label>
      </div>

      {loading ? (
        <p className="text-center mt-10 text-lg text-gray-500">Loading registrations...</p>
      ) : (
        <>
          <p className="mt-8 text-center text-cyan-600 text-xl sm:text-2xl md:text-3xl edu-nsw-act-cursive-font font-semibold">
            <Typewriter
              words={[`Registrations have been made with this Email : ${registration.length}`]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>

          <div className="overflow-x-auto mt-10">
            <table className="table w-full min-w-[600px] sm:min-w-full">
              <thead>
                <tr>
                  <th>
                    <h1 className="text-lg sm:text-xl">#</h1>
                  </th>
                  <th className="text-sm sm:text-base">Name and Email</th>
                  <th className="text-sm sm:text-base">Additional Info. & Contact</th>
                  <th className="text-sm sm:text-base">Marathons Title & Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="fira-sans-extralight text-xs sm:text-sm">
                {filterRegistration.length > 0 ? (
                  filterRegistration.map((myApply, index) => (
                    <ApplyRegRow
                      key={myApply._id}
                      index={index}
                      myApply={myApply}
                      id={myApply._id}
                      onDelete={handleDelete} 
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-gray-500">
                      No matching registrations found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MyApplyList;
