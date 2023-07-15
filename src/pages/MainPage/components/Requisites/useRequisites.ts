import { useState, useEffect } from "react";

export function useRequisites() {
  const [state, setState] = useState(false);
  const interval = setInterval(() => {
    setState(!state);
  }, 1000);
  return { state };
}
