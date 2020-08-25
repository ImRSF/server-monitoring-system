import React, { useState } from "react";

import { Button, Label, Input, FormGroup } from "reactstrap";
import classNames from "classnames";
import ReactBSAlert from "react-bootstrap-sweetalert";

import DataTable from "../../../components/DataTable/DataTable";

const UsersTable = (props) => {
  const checkRows = (
    <div className="text-center">
      <FormGroup check>
        <Label check>
          <Input defaultChecked type="checkbox" />
          <span className="form-check-sign" />
        </Label>
      </FormGroup>
    </div>
  );
  const columns = [
    {
      Header: (
        <div style={{ backgroundColor: "#2578F6" }} className="text-center">
          User
        </div>
      ),
      columns: [
        {
          Header: <div className="text-center">First Name</div>,
          accessor: "FirstName",
          className: "text-center",
        },
        {
          Header: <div className="text-center">Middle Name</div>,
          accessor: "MiddleName",
          className: "text-center",
        },
        {
          Header: <div className="text-center">Last Name</div>,
          accessor: "LastName",
          className: "text-center",
        },
      ],
    },
    {
      Header: (
        <div style={{ backgroundColor: "#D250DB" }} className="text-center">
          Threshold Settings
        </div>
      ),
      columns: [
        {
          Header: <div className="text-center">Hardware</div>,
          accessor: "Hardware",
          style: {
            position: "relative",
            bottom: "20px",
          },
          sortable: false,
        },
        {
          Header: <div className="text-center">Software</div>,
          accessor: "Software",
          style: {
            position: "relative",
            bottom: "20px",
          },
          sortable: false,
        },
        {
          Header: <div className="text-center">Network</div>,
          accessor: "Network",
          style: {
            position: "relative",
            bottom: "20px",
          },
          sortable: false,
        },
      ],
    },
    {
      Header: (
        <div style={{ backgroundColor: "#FF7D7F" }} className="text-center">
          Server Settings
        </div>
      ),
      columns: [
        {
          Header: <div className="text-center">Server</div>,
          accessor: "Server",
          style: {
            position: "relative",
            bottom: "20px",
          },
          sortable: false,
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
        >
          <i className="tim-icons icon-zoom-split" />
        </Button>{" "}
        <Button
          color="warning"
          size="sm"
          className={classNames("btn-icon btn-simple")}
        >
          <i className="tim-icons icon-pencil" />
        </Button>{" "}
        <Button
          color="danger"
          size="sm"
          className={classNames("btn-icon btn-simple")}
          onClick={() => handleDeleteThreshold(id)}
        >
          <i className="tim-icons icon-simple-remove" />
        </Button>{" "}
      </div>
    );
  };

  const data = [
    {
      FirstName: "Roswaldo",
      MiddleName: "Solatorio",
      LastName: "Flores",
      Hardware: checkRows,
      Software: checkRows,
      Network: checkRows,
      Server: checkRows,
    },
    {
      FirstName: "Julius",
      MiddleName: "Falsario",
      LastName: "Susmina",
      Hardware: checkRows,
      Software: checkRows,
      Network: checkRows,
      Server: checkRows,
    },
  ].map((e) => {
    return { ...e, Actions: actionButtons(e.Server) };
  });

  const renderedComponent = useState(
    <DataTable
      allowExport={false}
      width={12}
      title={"Users"}
      data={data}
      columns={columns}
      minRows="undefined"
      showPaginationBottom={false}
    />
  )[0];

  return (
    <>
      {renderedAlert}
      {renderedComponent}
    </>
  );
};

export default UsersTable;
