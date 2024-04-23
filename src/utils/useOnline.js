import { useEffect, useState } from "react";

export const useOnline = () => {
  const [status, setStatus] = useState(true);
  useEffect(() => {
    addEventListener("offline", (event) => {
      setStatus(false);
    });
  }, []);

  return status;
};
