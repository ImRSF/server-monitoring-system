import React from "react";

import { Modal } from "reactstrap";

import DataTable from "../../../components/DataTable/DataTable";

import { useStore } from "../../../hooks/store";

const ServerList = (props) => {
  const dispatch = useStore(false)[1];
  const columns = [
    {
      Header: <div className="text-center">Server Name</div>,
      accessor: "ServerName",
      className: "text-center",
    },
    {
      Header: <div className="text-center">IP Address</div>,
      accessor: "IPAddress",
      className: "text-center",
    },
    {
      Header: <div className="text-center">Operating System</div>,
      accessor: "OS",
      className: "text-center",
    },
    {
      Header: <div className="text-center">Location</div>,
      accessor: "Location",
      className: "text-center",
    },
  ];
  const data = [
    {
      ServerID: "1",
      ServerName: "Server 10c",
      IPAddress: "192.168.1.2",
      OS: "Windows 10",
      Location: "Alabel, Sarangani",
    },
    {
      ServerID: "2",
      ServerName: "Server 17c",
      IPAddress: "192.168.200.38",
      OS: "Windows 7",
      Location: "Bula sa may basketbolan",
    },
  ];
  return (
    <Modal
      modalClassName="modal-black"
      isOpen={props.modalSearch}
      toggle={props.toggleModalSearch}
      size="lg"
    >
      <DataTable
        width={12}
        title={"Server List"}
        data={data}
        columns={columns}
        getTdProps={(state, rowInfo, column, instance) => {
          return {
            onClick: (e, handleOriginal) => {
              dispatch("SWITCH_SERVER", rowInfo.original.ServerID);
              props.toggleModalSearch()
              // console.log(rowInfo);

              // console.log("A Td Element was clicked!");
              // console.log("it produced this event:", e);
              // console.log("It was in this column:", column);
              // // console.log("It was in this row:", rowInfo.original.ServerName);
              // console.log("It was in this table instance:", instance);
              // IMPORTANT! React-Table uses onClick internally to trigger
              // events like expanding SubComponents and pivots.
              // By default a custom 'onClick' handler will override this functionality.
              // If you want to fire the original onClick handler, call the
              // 'handleOriginal' function
            },
          };
        }}
        minRows="undefined"
        showPaginationBottom={false}
      />
    </Modal>
  );
};

export default ServerList;
