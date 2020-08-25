import React, { useState } from "react";

import classNames from "classnames";
import ReactBSAlert from "react-bootstrap-sweetalert";

import { Button } from "reactstrap";

import DataTable from "../../../components/DataTable/DataTable";

import AddThresholdForm from "../../forms/Settings/AddThresholdForm";

const ThresholdTable = (props) => {
  const columns = [
    {
      Header: "Server",
      accessor: "Server",
    },
    {
      Header: "Location",
      accessor: "Location",
    },
    {
      Header: "Category",
      accessor: "Category",
    },
    {
      Header: "Date Created/Modified",
      accessor: "DateCreatedOrModified",
    },
    {
      Header: "Created/Modified By",
      accessor: "CreatedOrModifiedBy",
    },
    {
      Header: <div className="text-center">Actions</div>,
      accessor: "Actions",
    },
  ];

  const handleThresholdDetails = (id, state) => {
    setRenderedComponent(<AddThresholdForm title={state + " " + id} />);
  };

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
      <div className="actions-right">
        <Button
          color="success"
          size="sm"
          className={classNames("btn-icon btn-simple")}
          onClick={() => handleThresholdDetails(id, "View")}
        >
          <i className="tim-icons icon-zoom-split" />
        </Button>{" "}
        <Button
          color="warning"
          size="sm"
          className={classNames("btn-icon btn-simple")}
          onClick={() => handleThresholdDetails(id, "Edit")}
        >
          <i className="tim-icons icon-pencil" />
        </Button>{" "}
        <Button
          color="danger"
          size="sm"
          className={classNames("btn-icon btn-simple")}
          onClick={() => handleDeleteThreshold(id)}
        >
          <i className="tim-icons icon-trash-simple" />
        </Button>{" "}
      </div>
    );
  };

  const data = [
    {
      Server: "Server 10c",
      Location: "Alabel, Sarangani Province",
      Category: "Hardware",
      DateCreatedOrModified: "5/30/2020",
      CreatedOrModifiedBy: "HKNavarro",
    },
    {
      Server: "Server 17c",
      Location: "Alabel, Sarangani Province",
      Category: "Software",
      DateCreatedOrModified: "5/39/2019",
      CreatedOrModifiedBy: "FDVargas",
    },
  ].map((e) => {
    return { ...e, Actions: actionButtons(e.Server) };
  });

  const [renderedComponent, setRenderedComponent] = useState(
    <DataTable
      width={12}
      title={"Current Threshold"}
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

export default ThresholdTable;
