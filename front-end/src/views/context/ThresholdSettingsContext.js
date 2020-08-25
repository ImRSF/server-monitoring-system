import React from "react";

export const ThresholdSettingsContext = React.createContext({
  threshold: { id: null, status: "" },
  statusPoint: { id: null, status: "" },
});

const ThresholdSettingsContextProvider = (props) => {
  return (
    <ThresholdSettingsContext.Provider
      value={{ threshold: {}, statusPoint: {} }}
    >
      {props.children}
    </ThresholdSettingsContext.Provider>
  );
};

export default ThresholdSettingsContextProvider;