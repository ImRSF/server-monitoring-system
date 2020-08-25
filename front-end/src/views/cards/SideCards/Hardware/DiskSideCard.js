import React from "react";

import SideCard from "../../../../components/SideCard/SideCard";

const DiskSideCard = (props) => {
  return (
    <SideCard
      width="4"
      cardValues={[
        { name: "Read IO/Sec", value: "0 KB/s" },
        { name: "Write IO/Sec", value: "126 KB/s" },
        { name: "Total IO/Sec", value: "5100 KB/s" },
        { name: "Physical", value: "HDD" },
        { name: "Capacity", value: "962 GB" },
        { name: "Protocol", value: "SATA" },
      ]}
    />
  );
};

export default DiskSideCard;
