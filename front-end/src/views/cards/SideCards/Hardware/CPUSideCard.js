import React from "react";

import SideCard from "../../../../components/SideCard/SideCard";

const CPUSideCard = (props) => {
  return (
    <SideCard
      width="4"
      cardValues={[
        { name: "Speed (Avg)", value: "2.62GHz" },
        { name: "Voltage", value: "10 V" },
        { name: "Temperature (Avg)", value: "42*C" },
        { name: "L1 Cache", value: "128 KB" },
        { name: "L2 Cache", value: "512 KB" },
        { name: "L3 Cache", value: "4.0 MB" },
      ]}
    />
  );
};

export default CPUSideCard;
