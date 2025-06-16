import React, { useState, useEffect } from "react";

const HomeCard = ({ title = "City Marathon 2025", totalSlots = 1000, initialRegistered = 345 }) => {
  const [registered, setRegistered] = useState(initialRegistered);

  useEffect(() => {
    const interval = setInterval(() => {
      setRegistered(prev => {
        if (prev >= totalSlots) return prev;
        return prev + Math.floor(Math.random() * 10);       });
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlots]);

  const progressPercent = Math.min((registered / totalSlots) * 100, 100);

  return (
   <div className="w-9/12 mx-auto my-8 lg:my-20">
      <h1 className="text-center lg:text-4xl text-2xl edu-nsw-act-cursive-font font-semibold text-purple-400">Runner Registration Progress </h1>
      <p className="lg:text-lg text-sm text-center mt-2 fira-sans-extralight text-gray-500">Keep an eye on the registration status and secure your place in the upcoming marathon. Let’s run together!</p>

    <div className="fira-sans-extralight">
         <div
      style={{
        maxWidth: "400px",
        margin: "30px auto",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f5f7fa",
      }}
    >
      
      <h2 style={{ marginBottom: "10px", color: "#2c3e50" }}>{title}</h2>
      <p style={{ margin: "0 0 15px", color: "#34495e" }}>
        Total Slots: <strong>{totalSlots}</strong> &nbsp;|&nbsp; Registered: <strong>{registered}</strong>
      </p>

      <div
        style={{
          background: "#ddd",
          borderRadius: "20px",
          overflow: "hidden",
          height: "25px",
          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2)",
          marginBottom: "15px",
        }}
      >
        <div
          style={{
            width: `${progressPercent}%`,
            height: "100%",
            background: progressPercent > 75 ? "#27ae60" : "#2980b9",
            transition: "width 1s ease-in-out",
          }}
        />
      </div>

      <p style={{ fontSize: "0.9rem", color: "#7f8c8d", fontStyle: "italic" }}>
        {progressPercent < 100
          ? `Hurry up! Only ${totalSlots - registered} slots left.`
          : "Registration is now closed."}
      </p>
    </div>
    </div>
   </div>
  );
};

export default HomeCard;
