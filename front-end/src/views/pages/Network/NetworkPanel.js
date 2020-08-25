import React from "react";

import { Row } from "reactstrap";

import ReceivedBytesChart from "../../charts/Network/ReceivedBytesChart";
import TransferredBytesChart from "../../charts/Network/TransferredBytesChart";

import NetworkDashboardCards from "../../cards/DashboardCards/Network/NetworkDashboardCards";
import NetworkStatisticsTable from '../../tables/Network/NetworkStatisticsTable';


const NetworkPanel = () => { 
  return (
    <div className="content">
      <Row>
        <NetworkDashboardCards />
        <ReceivedBytesChart />
        <TransferredBytesChart />
      </Row>
      <NetworkStatisticsTable />
    </div>
  );
};

export default NetworkPanel;
