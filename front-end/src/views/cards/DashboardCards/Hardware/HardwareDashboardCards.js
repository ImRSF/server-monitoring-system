import React from "react";

import DashboardCard from "../../../../components/DashboardCard/DashboardCard";

const HardwareDashboardCard = (props) => {
  return (
    <>
      <DashboardCard
        cardHeader="Server Name"
        cardDetails="Server 10c"
        cardFooter="Alabel, Sarangani"
        cardImage="icon-molecule-40"
        imageClass="icon-danger"
        cardFooterImage="icon-watch-time"
      />

      <DashboardCard
        cardHeader="Total Cores"
        cardDetails="16 (Physical: 8)"
        cardFooter="Intel(R) Core(TM) i5-6200U CPU"
        cardImage="icon-single-02"
        imageClass="icon-success"
        cardFooterImage="icon-trophy"
      />

      <DashboardCard
        cardHeader="Memory Available"
        cardDetails="8.1GB"
        cardFooter="16.0 GB DDR3"
        cardImage="icon-shape-star"
        imageClass="icon-info"
        cardFooterImage="icon-sound-wave"
      />

      <DashboardCard
        cardHeader="Disk 0 (C: D:) Available"
        cardDetails="150GB"
        cardFooter="WDC WDS100T2B0A-00SM50"
        cardImage="icon-chat-33"
        imageClass="icon-primary"
        cardFooterImage="icon-refresh-01"
      />
    </>
  );
}; 

export default HardwareDashboardCard;
