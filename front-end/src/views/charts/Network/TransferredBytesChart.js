import React from "react";

import AreaChart from "../../../components/Charts/AreaChart";
import { chartExample2 } from "../../../variables/charts";

const TransferredBytesChart = (props) => {
    return (
        <AreaChart
            width={props.width}
            header="Transferred Bytes"
            title="Bytes/Sec"
            chartData={chartExample2.data}
            chartOptions={chartExample2.options}
        />
    );
};

export default TransferredBytesChart;
