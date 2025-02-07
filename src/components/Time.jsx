import { useState, useEffect } from "react";

const Time = () => {
  const [currentTime, setCurrentTime] = useState("");

  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    
    hours = hours % 12 || 12;

    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full">
      <p className="text-center  text-5xl md:text-8xl">{currentTime}</p>
      <p className="text-center text-3xl md:text-5xl my-5">Hey, hope you're well!</p>
    </div>
  );
};

export default Time;
