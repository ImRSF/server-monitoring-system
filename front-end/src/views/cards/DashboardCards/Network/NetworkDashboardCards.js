import React from "react";

import DashboardCard from "../../../../components/DashboardCard/DashboardCard";

const NetworkDashboardCards = (props) => {
  return (
    <>
      <DashboardCard
        cardHeader="Network Gateway"
        cardDetails="192.168.0.1"
        cardFooter="Default Gateway"
        cardImage="icon-molecule-40"
        imageClass="icon-danger"
        cardFooterImage="icon-watch-time"
      />

      <DashboardCard
        cardHeader="Interface"
        cardDetails="eth0"
        cardFooter="Default Interface"
        cardImage="icon-shape-star"
        imageClass="icon-info"
        cardFooterImage="icon-sound-wave"
      />

      <DashboardCard
        cardHeader="IP Address"
        cardDetails="192.168.022.120"
        cardFooter="IPv4"
        cardImage="icon-single-02"
        imageClass="icon-success"
        cardFooterImage="icon-trophy"
      />

      <DashboardCard
        cardHeader="Subnet"
        cardDetails="255.255.255.0"
        cardFooter="IPv4 Subnet"
        cardImage="icon-chat-33"
        imageClass="icon-primary"
        cardFooterImage="icon-refresh-01"
      />
    </>
  );
};

export default NetworkDashboardCards;
