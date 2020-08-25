import React from "react";

import DashboardCard from "../../../../components/DashboardCard/DashboardCard";

const ServerDashboardCard = (props) => {
  return (
    <>
      <DashboardCard
        cardHeader="Servers"
        cardDetails={15}
        cardFooter="All Servers"
        cardImage="icon-molecule-40"
        imageClass="icon-danger"
        cardFooterImage="icon-watch-time"
      />

      <DashboardCard
        cardHeader="Host"
        cardDetails={"Netmon ISS"}
        cardFooter="Alabel, Sarangani Province"
        cardImage="icon-single-02"
        imageClass="icon-success"
        cardFooterImage="icon-trophy"
      />

      <DashboardCard
        cardHeader="Users"
        cardDetails={10}
        cardFooter="All Users"
        cardImage="icon-shape-star"
        imageClass="icon-info"
        cardFooterImage="icon-sound-wave"
      />

      <DashboardCard
        cardHeader="Version"
        cardDetails={"1.0"}
        cardFooter="System Version"
        cardImage="icon-chat-33"
        imageClass="icon-primary"
        cardFooterImage="icon-refresh-01"
      />
    </>
  );
};

export default ServerDashboardCard;
