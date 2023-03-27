import { useState, useEffect } from "react";

const Clock = () => {
  const [getTime, setGetTime] = useState(new Date());
  const refreshClock = () => {
    setGetTime(new Date());
  };

  useEffect(() => {
    const intervalId = setInterval(refreshClock, 1000);
    return ()=> {
      clearInterval(intervalId);
    };
  }, []);

  return <div>{getTime.toLocaleTimeString("pl")}</div>;
};

export default Clock;
