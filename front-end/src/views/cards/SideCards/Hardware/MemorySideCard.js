import React from "react";

import SideCard from "../../../../components/SideCard/SideCard";

const MemorySideCard = (props) => {
  return (
    <SideCard
      width="4"
      cardValues={[
        { name: "In use (Compressed)", value: "8.2 GB (774 MB)" },
        { name: "Cached", value: "6.4 GB" },
        // Voltage = min ~ max
        { name: "Voltage", value: "1.2 ~ 1.3 V" },
        { name: "Clock Speed", value: "2667 MHz" },
        { name: "Type", value: "DDR4" },
        { name: "Form Factor", value: "SODIMM" },
      ]}
    />
  );
};

export default MemorySideCard;
