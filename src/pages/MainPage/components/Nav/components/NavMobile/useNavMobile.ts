import { useState } from "react";

export function useNavMobile() {
  const [state, setState] = useState(false);
  function handleClick() {
    setState((prevState) => !prevState);
  }
  return { state, handleClick };
}
