import React from "react";

import DataTable from "../../../components/DataTable/DataTable";

const OperatingSystemTable = () => {
  const columns = [
    {
      Header: "Name",
      accessor: "Name",
    },
    {
      Header: "Architecture",
      accessor: "Architecture",
    },
    {
      Header: "Serial No.",
      accessor: "SerialNo",
      width: 350
    },
    {
      Header: "Kernel",
      accessor: "Kernel",
    },
    {
      Header: "Release",
      accessor: "Release",
    },
    {
      Header: <div className="text-left">Version</div>,
      accessor: "Version",
    },
  ];
  const data = [
    {
      Name: "Windows 10",
      Architecture: "64-bit",
      SerialNo: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
      Kernel: "19.3.0",
      Release: "10.15.3",
      Version: "2.100",
    },
  ];

  return (
    <DataTable
      width={12}
      title={"Operating System"}
      data={data}
      columns={columns}
      minRows="undefined"
      showPaginationBottom={false}
    />
  );
};

export default OperatingSystemTable;
