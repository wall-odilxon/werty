import { useState, useEffect } from "react";

export function useApiList(endpoint) {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("loading"); 

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/${endpoint}`)
      .then(res => {
        if (!res.ok) throw new Error("Server xatosi: " + res.status);
        return res.json();
      })
      .then(json => {
        if (!cancelled) {
          setData(json);
          setStatus("ok");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => { cancelled = true; };
  }, [endpoint]);

  return { data, status };
}
