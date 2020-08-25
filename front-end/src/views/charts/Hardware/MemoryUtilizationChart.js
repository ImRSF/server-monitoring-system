import React from "react";

import AreaChart from "../../../components/Charts/AreaChart";

import { chartExample2 } from "../../../variables/charts";

const MemoryUtilizationChart = (props) => {
  return (
      <AreaChart
        width={props.width}
        header="Memory"
        title="Memory Utilization"
        chartData={chartExample2.data}
        chartOptions={chartExample2.options}
      />
  );
};

export default MemoryUtilizationChart;
