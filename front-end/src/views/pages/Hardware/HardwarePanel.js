import React, { useState } from "react";

import { Row } from "reactstrap";

// Global Components

// View Components

import HardwareDashboardCards from "../../cards/DashboardCards/Hardware/HardwareDashboardCards";

import CPUSideCard from "../../cards/SideCards/Hardware/CPUSideCard";
import MemorySideCard from "../../cards/SideCards/Hardware/MemorySideCard";
import DiskSideCard from "../../cards/SideCards/Hardware/DiskSideCard";

import CPUUtilizationChart from "../../charts/Hardware/CPUUtilizationChart";
import MemoryUtilizationChart from "../../charts/Hardware/MemoryUtilizationChart";
import DiskUtilizationChart from "../../charts/Hardware/DiskUtilizationChart";

// import WorkerService fro../../../services/WorkerServicesice";

const HardwarePanel = (props) => {
  const [time, setTime] = useState();
  return (
    <>
      <div className="content">
        {/* {setInterval(() => {
          setTime(WorkerService.callWorker());
        }, 1000)} */}
        <Row>
          <HardwareDashboardCards />
          {/* <h1>{time}</h1>  */}
          <CPUUtilizationChart width={8} />
          <CPUSideCard />

          <MemoryUtilizationChart width={8} />
          <MemorySideCard />

          <DiskUtilizationChart width={8} />
          <DiskSideCard />
        </Row>
      </div>
    </>
  );
};

export default HardwarePanel;
