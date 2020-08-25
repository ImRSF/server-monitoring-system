import React from "react";

import SideCard from "../../../../components/SideCard/SideCard";

const ServerSideCard = (props) => {
  return (
    <SideCard
      title={props.title}
      width="3"
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

export default ServerSideCard;
