import React from "react";

import DataTable from "../../../components/DataTable/DataTable";

const SoftwareServicesTable = () => {
  const columns = [
    {
      Header: "Name",
      accessor: "Name",
    },
    {
      Header: "Status",
      accessor: "Status",
    },
    {
      Header: "Mode",
      accessor: "Mode",
    },
    {
      Header: "CPU",
      accessor: "CPU",
    },
    {
      Header: <div className="text-left">Memory</div>,
      accessor: "Memory",
    },
  ];
  const data = [
    {
      Name: "AarSvc",
      Status: "Stopped",
      Mode: "Manual",
      CPU: "2%",
      Memory: "1%",
    },
    {
      Name: "defragsvc",
      Status: "Running",
      Mode: "Automatic",
      CPU: "4%",
      Memory: "5%",
    },
  ];

  return (
    <DataTable
      width={12}
      title={"Software Services"}
      data={data}
      columns={columns}
      minRows="undefined"
    />
  );
};

export default SoftwareServicesTable;
