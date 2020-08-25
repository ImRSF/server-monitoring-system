import React from "react";

import { Row } from "reactstrap";

import NetworkDashboardCards from "../../cards/DashboardCards/Network/NetworkDashboardCards";
import NetworkInformationTable from "../../tables/Network/NetworkInformationTable";

const NetworkSpecifications = () => {
  return (
    <div className="content">
      <Row>
        <NetworkDashboardCards />
      </Row>
      <NetworkInformationTable />
    </div>
  );
};

export default NetworkSpecifications;
