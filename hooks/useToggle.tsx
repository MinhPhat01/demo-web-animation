import { useCallback, useState } from "react";

export default function useToggle(initState = false) {
  const [state, setState] = useState<boolean>(initState);

  const toggle = useCallback(() => setState((state) => !state), []);
  return {
    state,
    toggle,
  };
}
