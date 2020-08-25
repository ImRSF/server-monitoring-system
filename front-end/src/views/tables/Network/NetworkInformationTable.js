import React from "react";

import DataTable from "../../../components/DataTable/DataTable";

const NetworkInformationTable = () => {
  const columns = [
    {
      Header: "Interface",
      accessor: "Interface",
    },
    {
      Header: "Connection Type",
      accessor: "ConnectionType",
    },
    {
      Header: "Mac Address",
      accessor: "MacAddress",
    },
    {
      Header: "IPv4 Address",
      accessor: "IPv4Address",
    },
    {
      Header: "IPv6 Address",
      accessor: "IPv6Address",
      width: 200
    },
    {
      Header: <div className="text-left">DHCP Address</div>,
      accessor: "DHCPAddress",
    },
  ];
  const data = [
    {
      Interface: "en0",
      ConnectionType: "Wired",
      MacAddress: "D0-7E-35-E6-F7-D0",
      DHCPAddress: "192.168.1.1",
      IPv4Address: "192.168.1.1",
      IPv6Address: "fe80::b872:a2f5:e92f:8ddb%2"
    },
    {
      Interface: "en1",
      ConnectionType: "Wireless",
      MacAddress: "Z0-7A-35-E6-F0-D0",
      DHCPAddress: "192.168.1.2",
      IPv4Address: "192.168.1.2",
      IPv6Address: "fe80::b872:a2f5:e92f:8ddb%2"
    },
  ];

  return (
    <DataTable
      width={12}
      title={"Network Information"}
      data={data}
      columns={columns}
      minRows="undefined"
    />
  );
};

export default NetworkInformationTable;
