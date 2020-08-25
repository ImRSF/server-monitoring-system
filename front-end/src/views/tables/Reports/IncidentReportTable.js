import React, { useState } from "react";

import classNames from "classnames";
import ReactDatetime from "react-datetime";
import ReactBSAlert from "react-bootstrap-sweetalert";
import Select from "react-select";

import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Label,
  FormGroup,
} from "reactstrap";

import DataTable from "../../../components/DataTable/DataTable";

const IncidentReportTable = (props) => {
  const reportFilters = (
    <Card>
      <CardHeader>
        <CardTitle tag="h3">Report Parameters</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="form-row">
          <FormGroup className="col-md-6">
            <Label for="ThresholdNumber">Beginning Date</Label>
            <ReactDatetime
              inputProps={{
                className: "form-control",
                placeholder: "Select Date",
              }}
              timeFormat={false}
            />
          </FormGroup>
          <FormGroup className="col-md-6">
            <Label for="ThresholdNumber">Ending Date</Label>
            <ReactDatetime
              inputProps={{
                className: "form-control",
                placeholder: "Select Date",
              }}
              timeFormat={false}
            />
          </FormGroup>
        </div>
        <div className="form-row">
          <FormGroup className="col-md-6">
            <Label for="ThresholdNumber">Server</Label>
            <Select
              className="react-select info"
              classNamePrefix="react-select"
              name="singleSelect"
              isSearchable={false}
              //   value={this.state.singleSelect}
              //   onChange={(value) =>
              //     this.setState({ singleSelect: value })
              //   }
              options={[
                {
                  value: "All Servers",
                  label: "All",
                },
                {
                  value: "Server 4",
                  label: "Server 4",
                },
                {
                  value: "Server 11c",
                  label: "Server 11c",
                },
              ]}
              placeholder="Select Server"
            />
          </FormGroup>
          <FormGroup className="col-md-6">
            <Label></Label>
            <Button block color="success">
              Generate Report
            </Button>
          </FormGroup>
        </div>
      </CardBody>
    </Card>
  );
  const columns = [
    {
      Header: (
        <div style={{ backgroundColor: "#2578F6" }} className="text-center">
          Report
        </div>
      ),
      columns: [
        {
          Header: <div className="text-center">Report Name</div>,
          accessor: "ReportName",
          className: "text-center",
          width: 150
        },
        {
          Header: <div className="text-center">Report Number</div>,
          accessor: "ReportNumber",
          className: "text-center",
          width: 150
        },
        {
          Header: <div className="text-center">Date Created</div>,
          accessor: "DateGenerated",
          className: "text-center",
          width: 150
        },
        {
          Header: <div className="text-center">Category</div>,
          accessor: "CategoryName",
          className: "text-center",
        },
      ],
    },
    {
      Header: (
        <div style={{ backgroundColor: "#D250DB" }} className="text-center">
          Server
        </div>
      ),
      columns: [
        {
          Header: <div className="text-center">Server Name</div>,
          accessor: "ServerName",
          className: "text-center",
        },
        {
          Header: <div className="text-center">Location</div>,
          accessor: "Location",
          className: "text-center",
          width: 250,
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
          <i className="tim-icons icon-notes" />
        </Button>{" "}
      </div>
    );
  };

  const data = [
    {
      ReportName: "Incident Report",
      ReportNumber: "SR-20200609-001",
      DateGenerated: "2020-06-09",
      CategoryName: "Software",
      ServerName: "Server 10c",
      Location: "Alabel, Sarangani Province",
      IPAddress: "192.168.1.2",
    },
    {
      ReportName: "Incident Report",
      ReportNumber: "SR-20200610-001",
      DateGenerated: "2020-06-09",
      CategoryName: "Hardware",
      ServerName: "Server 10c",
      Location: "Alabel, Sarangani Province",
      IPAddress: "192.168.1.2",
    },
  ].map((e) => {
    return { ...e, Actions: actionButtons(e.Server) };
  });

  const [renderedComponent, setRenderedComponent] = useState(
    <DataTable
      width={12}
      title={"Incident Reports"}
      data={data}
      columns={columns}
      minRows="undefined"
      showPaginationBottom={true}
    />
  );

  return (
    <>
      {renderedAlert}
      {reportFilters}
      {renderedComponent}
    </>
  );
};

export default IncidentReportTable;
