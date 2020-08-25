import React from "react";

import { Row } from "reactstrap";

import SoftwareDashboardCards from "../../cards/DashboardCards/Software/SoftwareDashboardCards";
import SoftwareProcessTable from '../../tables/Software/SoftwareProcessTable';

const SoftwareProcesses = () => {
  return (
    <div className="content">
      <Row>
        <SoftwareDashboardCards />
      </Row>
      <SoftwareProcessTable />
    </div>
  );
};

export default React.memo(SoftwareProcesses);
