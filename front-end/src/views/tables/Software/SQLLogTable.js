import React from "react";

import DataTable from "../../../components/DataTable/DataTable";

const SQLLogTable = () => {
  const columns = [
    {
      Header: "Server",
      accessor: "ServerName",
    },
    {
      Header: "Database",
      accessor: "DatabaseName",
    },
    {
      Header: "Start Date",
      accessor: "StartDate",
    },
    {
      Header: "End Date",
      accessor: "EndDate",
    },
    {
      Header: <div className="text-left">Size (MB)</div>,
      accessor: "Size",
    },
  ];
  const data = [
    {
      ServerName: "NT4_SERVER3\\SACI",
      DatabaseName: "ARBILLINGSYSTEMSACI",
      StartDate: "2020-05-29",
      EndDate: "2020-05-29",
      Size: "100 MB",
    },
    {
      ServerName: "Server10c",
      DatabaseName: "APPIE2020",
      StartDate: "2020-05-30",
      EndDate: "2020-05-30",
      Size: "1000 MB",
    },
  ];

  return (
    <DataTable
      width={12}
      title={"SQL Server Logs"}
      data={data}
      columns={columns}
      minRows="undefined"
      filterable={true}
    />
  );
};

export default SQLLogTable;
