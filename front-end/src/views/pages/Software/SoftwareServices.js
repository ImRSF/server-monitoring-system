import React from "react";

import { Row } from "reactstrap";

import SoftwareDashboardCards from "../../cards/DashboardCards/Software/SoftwareDashboardCards";
import SoftwareServicesTable from '../../tables/Software/SoftwareServicesTable';

const SoftwareServices = () => {
  return (
    <div className="content">
      <Row>
        <SoftwareDashboardCards />
      </Row>
      <SoftwareServicesTable />
    </div>
  );
};

export default SoftwareServices;
