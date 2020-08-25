import React from 'react';

import { Row } from "reactstrap";

import ServerDashboardCards from "../../cards/DashboardCards/Server/ServerDashboardCards";

import ServersTable from "../../tables/Server/ServersTable";

const ServerPanel = () => {
    return (
        <div className="content">
            <Row>
                <ServerDashboardCards />
            </Row>
            <ServersTable />
        </div>
    );
}

export default ServerPanel;
