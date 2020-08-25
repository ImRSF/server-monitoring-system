import React from "react";

import classNames from "classnames";
import { Button } from "reactstrap";

import DataTable from "../../../components/DataTable/DataTable";

const ThresholdPointTable = React.memo((props) => {
  const actionButtons = (
    <div className="actions-right">
      <Button
        color="success"
        size="sm"
        type="button"
        className={classNames("btn-icon btn-simple")}
        onClick={props.viewThresholdPoint}
      >
        <i className="tim-icons icon-zoom-split" />
      </Button>{" "}
      <Button
        color="warning"
        size="sm"
        type="button"
        className={classNames("btn-icon btn-simple")}
        onClick={props.editThresholdPoint}
      >
        <i className="tim-icons icon-pencil" />
      </Button>{" "}
      <Button
        color="danger"
        size="sm"
        type="button"
        className={classNames("btn-icon btn-simple")}
        onClick={props.deleteThresholdPoint}
      >
        <i className="tim-icons icon-trash-simple" />
      </Button>{" "}
    </div>
  );

  const columns = [
    {
      Header: "Name",
      accessor: "Name",
    },
    {
      Header: "Comparator",
      accessor: "Comparator",
    },
    {
      Header: "Compared Value",
      accessor: "ComparedValue",
    },
    {
      Header: "Symbol",
      accessor: "Symbol",
    },
    {
      Header: "Actions",
      accessor: "Actions",
      sortable: false,
    },
  ];

  const data = [
    {
      Name: "CPU Temperature",
      Comparator: "<=",
      ComparedValue: "70",
      Symbol: "Degrees Celsius",
      Actions: actionButtons,
    },
    {
      Name: "CPU Voltage",
      Comparator: ">=",
      ComparedValue: "30",
      Symbol: "Volts",
      Actions: actionButtons,
    },
  ];

  let displayedComponent = (
    <DataTable
      width={12}
      title={"Threshold Points"}
      data={data}
      columns={columns}
      minRows="undefined"
      showPaginationBottom={false}
    />
  );

  return <>{displayedComponent}</>;
});

export default ThresholdPointTable;
