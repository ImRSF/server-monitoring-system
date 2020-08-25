import React from "react";

import DataTable from "../../../components/DataTable/DataTable";

const SoftwareProcessTable = () => {
  const columns = [
    {
      Header: "Name",
      accessor: "Name",
    },
    {
      Header: "Process ID",
      accessor: "ProcessID",
    },
    {
      Header: "State",
      accessor: "State",
    },
    {
      Header: "CPU",
      accessor: "CPU",
    },
    {
      Header: "Memory",
      accessor: "Memory",
    },
    {
      Header: <div className="text-left">Start Time</div>,
      accessor: "StartTime",
    }
  ];
  const data = [
    {
      Name: "Google Chrome",
      ProcessID: "1",
      State: "Running",
      CPU: "2%",
      Memory: "1%",
      StartTime: "2020-02-08 10:18:15",
    },
    {
      Name: "Task Manager",
      ProcessID: "2",
      State: "Running",
      CPU: "29%",
      Memory: "19%",
      StartTime: "2020-02-08 10:18:13",
    },
  ];

  return (
    <DataTable
      width={12}
      title={"Software Processes"}
      data={data}
      columns={columns}
      minRows="undefined"
    />
  );
};

export default SoftwareProcessTable;
