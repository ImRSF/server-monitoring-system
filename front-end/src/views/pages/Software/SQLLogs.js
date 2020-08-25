import React from "react";

import { Row } from "reactstrap";

import SoftwareDashboardCards from "../../cards/DashboardCards/Software/SoftwareDashboardCards";
import SQLLogTable from "../../tables/Software/SQLLogTable";

const SQLLogs = () => {
  return (
    <div className="content">
      <Row>
        <SoftwareDashboardCards />
      </Row>
      <SQLLogTable />
    </div>
  );
};

export default SQLLogs;
