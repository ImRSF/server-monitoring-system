import React from "react";

import DashboardCard from "../../../../components/DashboardCard/DashboardCard";

const SoftwareDashboardCards = (props) => {
  return (
    <>
      <DashboardCard 
        cardHeader="Operating System"
        cardDetails="Windows 10"
        cardFooter="64-bit, Version 2.100"
        cardImage="icon-molecule-40"
        imageClass="icon-danger"
        cardFooterImage="icon-watch-time"
      />

      <DashboardCard
        cardHeader="Running Apps"
        cardDetails="Total: 3"
        cardFooter="Currently Running"
        cardImage="icon-single-02"
        imageClass="icon-success"
        cardFooterImage="icon-trophy"
      />

      <DashboardCard
        cardHeader="Installed Apps"
        cardDetails="Total: 8"
        cardFooter="Currently Installed"
        cardImage="icon-shape-star"
        imageClass="icon-info"
        cardFooterImage="icon-sound-wave"
      />

      <DashboardCard
        cardHeader="Background Processes"
        cardDetails="Total: 20"
        cardFooter="Currently Running"
        cardImage="icon-chat-33"
        imageClass="icon-primary"
        cardFooterImage="icon-refresh-01"
      />
    </>
  );
};

export default React.memo(SoftwareDashboardCards);
