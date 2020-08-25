import React from "react";

import AreaChart from "../../../components/Charts/AreaChart";

import { chartExample2 } from "../../../variables/charts";

const DiskUtilizationChart = (props) => {
  return (
      <AreaChart
        width={props.width}
        header="Disk"
        title="Disk Utilization"
        chartData={chartExample2.data}
        chartOptions={chartExample2.options}
      />
  );
};

export default DiskUtilizationChart;
