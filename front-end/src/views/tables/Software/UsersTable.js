import React from "react";

import DataTable from "../../../components/DataTable/DataTable";

const UsersTable = () => {
  const columns = [
    {
      Header: "Name",
      accessor: "Name",
    },
    {
      Header: "Login Date",
      accessor: "LoginDate",
    },
    {
      Header: "Login Time",
      accessor: "LoginTime",
    },
    {
      Header: "IP Address",
      accessor: "IPAddress",
    },
    {
      Header: <div className="text-left">Last Command</div>,
      accessor: "LastCommand",
    },
  ];
  const data = [
    {
      Name: "Aldwin Enriquez",
      LoginDate: "2020-02-01",
      LoginTime: "21:20",
      IPAddress: "192.168.201.93",
      LastCommand: "ipconfig",
    },
    {
      Name: "Francis Vargaz",
      LoginDate: "2020-03-01",
      LoginTime: "29:20",
      IPAddress: "192.168.203.23",
      LastCommand: "sudo rm -rf /",
    },
  ];

  return (
    <DataTable
      width={12}
      title={"Users"}
      data={data}
      columns={columns}
      minRows="undefined"
      showPaginationBottom={false}
    />
  );
};

export default UsersTable;
