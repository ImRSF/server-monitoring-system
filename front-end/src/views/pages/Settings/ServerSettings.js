import React from "react";

import { Row } from "reactstrap";

import OverviewDashboardCards from "../../cards/DashboardCards/OverviewDashboardCards";
import ServerSettingTable from "../../tables/Settings/ServerSettingTable";

const ServerSettings = () => {
  return (
    <div className="content">
      <Row>
        <OverviewDashboardCards />
      </Row>
      <ServerSettingTable />
    </div>
  );
};

export default ServerSettings;
