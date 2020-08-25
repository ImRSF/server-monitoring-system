import React from "react";

import { Row } from "reactstrap";

import ServerDashboardCards from "../../cards/DashboardCards/Server/ServerDashboardCards";
import IncidentReportTable from "../../tables/Reports/IncidentReportTable";

const IncidentReports = () => {
  return (
    <div className="content">
      <Row>
        <ServerDashboardCards />
      </Row>
      <IncidentReportTable />
    </div>
  );
};

export default IncidentReports;
