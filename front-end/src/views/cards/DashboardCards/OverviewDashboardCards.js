import React from "react";

import DashboardCard from "../../../components/DashboardCard/DashboardCard";

const OverviewDashboardCards = React.memo(() => {
  return (
    <>
      <DashboardCard
        cardHeader="Disk Space"
        cardDetails="150GB"
        cardFooter="Available Storage"
        cardImage="icon-chat-33"
        imageClass="icon-primary"
        cardFooterImage="icon-refresh-01"
      />
      <DashboardCard
        cardHeader="Processes"
        cardDetails="150"
        cardFooter="Background Processes"
        cardImage="icon-shape-star"
        imageClass="icon-info"
        cardFooterImage="icon-sound-wave"
      />
      <DashboardCard
        cardHeader="Apps"
        cardDetails="4"
        cardFooter="Running Apps"
        cardImage="icon-single-02"
        imageClass="icon-success"
        cardFooterImage="icon-trophy"
      />
      <DashboardCard
        cardHeader="Host"
        cardDetails={"Netmon ISS"}
        cardFooter="Alabel, Sarangani Province"
        cardImage="icon-molecule-40"
        imageClass="icon-danger"
        cardFooterImage="icon-watch-time"
      />
    </>
  );
});

export default OverviewDashboardCards;
