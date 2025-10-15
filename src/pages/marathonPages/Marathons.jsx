import React, { useEffect, useState, useCallback } from "react";
import MarathonCards from "./MarathonCards";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Marathons = () => {
  const [marathons, setMarathons] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const axiosSecure = useAxiosSecure();

  const fetchMarathons = useCallback(async (order) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosSecure.get(`/marathons?sort=${order}`);
      setMarathons(response.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Failed to fetch marathons");
      setMarathons([]);
    } finally {
      setLoading(false);
    }
  }, [axiosSecure]);

  useEffect(() => {
    fetchMarathons(sortOrder);
  }, [sortOrder, fetchMarathons]);

  return (
    <div className="w-9/12 mx-auto my-20">
      <Helmet>
        <title>myMarathonsList || raceClock</title>
        <meta name="description" content="Marathons listing with sorting" />
      </Helmet>

      <div className="mb-6">
        <label htmlFor="sort" className="mr-2 font-semibold">
          Sort by date:
        </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1"
        >
          <option value="desc">Newest to Oldest</option>
          <option value="asc">Oldest to Newest</option>
        </select>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {loading ? (
        <p>Loading marathons...</p>
      ) : marathons.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {marathons.map((marathon) => (
            <MarathonCards key={marathon._id} marathon={marathon} />
          ))}
        </div>
      ) : (
        <p>No marathons found.</p>
      )}
    </div>
  );
};

export default Marathons;
