import React, { useState } from "react";

import classNames from "classnames";
import ReactBSAlert from "react-bootstrap-sweetalert";

import { Button } from "reactstrap";

import DataTable from "../../../components/DataTable/DataTable";

const ServerSettingTable = (props) => {
  const columns = [
    {
      Header: (
        <div style={{ backgroundColor: "#2578F6" }} className="text-center">
          Servers
        </div>
      ),
      columns: [
        {
          Header: <div className="text-center">Name</div>,
          accessor: "ServerName",
          className: "text-center",
        },
        {
          Header: <div className="text-center">Location</div>,
          accessor: "Location",
          className: "text-center",
        },
        {
          Header: <div className="text-center">IP Address</div>,
          accessor: "IPAddress",
          className: "text-center",
        },
      ],
    },
    {
      Header: (
        <div style={{ backgroundColor: "#D250DB" }} className="text-center">
          Users
        </div>
      ),
      columns: [
        {
          Header: <div className="text-center">Full Name</div>,
          accessor: "FullName",
          className: "text-center"
        },
        {
          Header: <div className="text-center">Position</div>,
          accessor: "Position",
          className: "text-center"
        },
        {
          Header: <div className="text-center">User Group</div>,
          accessor: "UserGroup",
          className: "text-center"
        },
      ],
    },
    {
      Header: (
        <div style={{ backgroundColor: "#F94D6D" }} className="text-center">
          Actions
        </div>
      ),
      columns: [
        {
          Header: <div className="text-center">Controls</div>,
          accessor: "Actions",
          sortable: false,
        },
      ],
    },
  ];

  //   const handleThresholdDetails = (id, state) => {
  //     setRenderedComponent(<AddThresholdForm title={state + " " + id} />);
  //   };

  const [renderedAlert, setRenderedAlert] = useState(null);
  const handleDeleteThreshold = (id) => {
    setRenderedAlert(
      <ReactBSAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title={`Delete ${id}?`}
        confirmBtnBsStyle="success"
        btnSize=""
      >
        You clicked the button!
      </ReactBSAlert>
    );
  };

  const actionButtons = (id) => {
    return (
      <div className="text-center">
        <Button
          color="success"
          size="sm"
          className={classNames("btn-icon btn-simple")}
          //   onClick={() => handleThresholdDetails(id, "View")}
        >
          <i className="tim-icons icon-zoom-split" />
        </Button>{" "}
        <Button
          color="warning"
          size="sm"
          className={classNames("btn-icon btn-simple")}
          //   onClick={() => handleThresholdDetails(id, "Edit")}
        >
          <i className="tim-icons icon-pencil" />
        </Button>{" "}
      </div>
    );
  };

  const data = [
    {
      ServerName: "Server 10c",
      Location: "Alabel, Sarangani",
      IPAddress: "192.168.10.2",
      FullName: "Vargas, Francis",
      Position: "System Administrator",
      UserGroup: "Super User",
    },
    {
      ServerName: "Server 11c",
      Location: "Bula, General Santos",
      IPAddress: "192.168.11.2",
      FullName: "Celeste, Mark Kyveen",
      Position: "Network Administrator",
      UserGroup: "User",
    },
  ].map((e) => {
    return { ...e, Actions: actionButtons(e.Server) };
  });

  const [renderedComponent, setRenderedComponent] = useState(
    <DataTable
      width={12}
      title={"Server Settings"}
      data={data}
      columns={columns}
      minRows="undefined"
      showPaginationBottom={false}
    />
  );

  return (
    <>
      {renderedAlert}
      {renderedComponent}
    </>
  );
};

export default ServerSettingTable;
