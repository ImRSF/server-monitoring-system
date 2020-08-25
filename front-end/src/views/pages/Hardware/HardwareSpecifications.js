import React from "react";

import { Row } from "reactstrap";

// Global Components

// View Components
import HardwareDashboardCards from "../../cards/DashboardCards/Hardware/HardwareDashboardCards";

import HardwarePeripheralsTable from "../../tables/Hardware/HardwarePeripheralsTable";

const HardwareSpecifications = (props) => {
  return (
    <div className="content">
      <Row>
        <HardwareDashboardCards />
      </Row>
      <HardwarePeripheralsTable />
    </div>
  );
};

export default HardwareSpecifications;
