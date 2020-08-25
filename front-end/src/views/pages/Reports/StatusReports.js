import React from "react";

import { Row } from "reactstrap";

import ServerDashboardCards from "../../cards/DashboardCards/Server/ServerDashboardCards";
import StatusReportTable from "../../tables/Reports/StatusReportTable";

const StatusReports = () => {
  return (
    <div className="content">
      <Row>
        <ServerDashboardCards />
      </Row>
      <StatusReportTable />
    </div>
  );
};

export default StatusReports;
