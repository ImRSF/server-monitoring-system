import React from "react";
import DataTable from "../../../components/DataTable/DataTable";

const NetworkStatisticsTable = () => {
  const columns = [
    {
      Header: "Interface",
      accessor: "Interface",
    },
    {
      Header: "Received Bytes",
      accessor: "ReceivedBytes",
    },
    {
      Header: "Received Dropped",
      accessor: "ReceivedDropped",
    },
    {
      Header: "Transferred Bytes",
      accessor: "TransferredBytes",
    },
    {
      Header: "Transferred Dropped",
      accessor: "TransferredDropped",
    },
    {
      Header: <div className="text-left">Interval</div>,
      accessor: "Interval",
    },
  ];
  const data = [
    {
      Interface: "en0",
      ReceivedBytes: "1752.86 MB",
      ReceivedDropped: "0 MB",
      TransferredBytes: "1809.34 MB",
      TransferredDropped: "10 MB",
      Interval: "786 ms",
    },
    {
      Interface: "en1",
      ReceivedBytes: "1212.86 MB",
      ReceivedDropped: "11 MB",
      TransferredBytes: "17452.86 MB",
      TransferredDropped: "5 MB",
      Interval: "985 ms",
    },
  ];

  return (
    <DataTable
      width={12}
      title={"Network Statistics"}
      data={data}
      columns={columns}
      minRows="undefined"
      showPaginationBottom={false}
    />
  );
};

export default NetworkStatisticsTable;
