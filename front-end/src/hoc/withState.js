import React from "react";
import { useStore } from "../hooks/store";

const withState = (Component) => {
  return (props) => {
    const [state, dispatch] = useStore();

    return <Component state={state} dispatch={dispatch} {...props} />;
  };
};

export default withState;
 