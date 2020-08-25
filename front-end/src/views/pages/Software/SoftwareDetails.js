import React from "react";

import { Row } from "reactstrap";

import SoftwareDashboardCards from "../../cards/DashboardCards/Software/SoftwareDashboardCards";
import OperatingSystemTable from "../../tables/Software/OperatingSystemTable";
import UsersTable from "../../tables/Software/UsersTable";

const SoftwareDetails = () => {
  return (
    <div className="content">
      <Row>
        <SoftwareDashboardCards />
      </Row>
      <OperatingSystemTable />
      <UsersTable />
    </div>
  );
};

export default SoftwareDetails;
