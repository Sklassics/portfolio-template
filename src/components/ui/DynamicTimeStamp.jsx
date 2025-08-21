import { useState, useEffect } from "react";

const DynamicTimestamp = () => {
  const [timestamp, setTimestamp] = useState(new Date().toISOString().slice(0, 10));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(new Date().toISOString().slice(0, 10));
    }, 1000); // Updates every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <div className="text-right text-xs text-zinc-600 mt-2 pr-2">LOC: {timestamp}</div>;
};

export default DynamicTimestamp;
