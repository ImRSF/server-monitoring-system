import React from "react";

import DataTable from "../../../components/DataTable/DataTable";

const ServersTable = () => {
  const columns = [
    {
      Header: (
        <div style={{ backgroundColor: "#1D8CF8" }} className="text-center">
          Server
        </div>
      ),
      columns: [
        {
          Header: <div className="text-center">Name</div>,
          accessor: "Name",
          className: "text-center",
        },
        {
          Header: <div className="text-center">Location</div>,
          accessor: "Location",
          className: "text-center",
          width: 200,
        },
      ],
    },
    {
      Header: (
        <div style={{ backgroundColor: "#00BF9A" }} className="text-center">
          Hardware
        </div>
      ),
      columns: [
        {
          Header: <div className="text-center">CPU Utilization</div>,
          accessor: "CPUUtilization",
          className: "text-center",
        },
        {
          Header: <div className="text-center">Memory Utilization</div>,
          accessor: "MemoryUtilization",
          width: 180,
          className: "text-center",
        },
      ],
    },
    {
      Header: (
        <div style={{ backgroundColor: "#FD5D93" }} className="text-center">
          Software
        </div>
      ),
      columns: [
        {
          Header: <div className="text-center">Processes</div>,
          accessor: "Processes",
          className: "text-center",
        },
      ],
    },
    {
      Header: (
        <div style={{ backgroundColor: "#D250DB" }} className="text-center">
          Network
        </div>
      ),
      columns: [
        {
          Header: <div className="text-center">IP Address</div>,
          accessor: "IPAddress",
          className: "text-center",
        },
        {
          Header: <div className="text-center">Transferred Bytes</div>,
          accessor: "TransferredBytes",
          width: 180,
          className: "text-center",
        },
      ],
    },
  ];
  const data = [
    {
      Name: "Server 10c",
      Location: "Alabel, Sarangani Province",
      IPAddress: "192.168.1.2",
      CPUUtilization: "10%",
      MemoryUtilization: "14%",
      Processes: "4",
      TransferredBytes: "10 kbps",
    },
    {
      Name: "Server 17c",
      Location: "Bula sa may basketbolan",
      IPAddress: "192.168.200.38",
      CPUUtilization: "100%",
      MemoryUtilization: "70%",
      Processes: "6",
      TransferredBytes: "150 kbps",
    },
  ];

  return (
    <DataTable
      width={12}
      title={"Servers"}
      data={data}
      columns={columns}
      minRows="undefined"
      showPaginationBottom={false}
    />
  );
};

export default ServersTable;
