import React, { useState } from "react";

import { Row, Button } from "reactstrap";

import OverviewDashboardCards from "../../cards/DashboardCards/OverviewDashboardCards";
import ThresholdTable from "../../tables/Settings/ThresholdTable";
import AddThresholdForm from "../../forms/Settings/AddThresholdForm";

const ThresholdSettings = () => {
  const [hideThresholdButton, setHideThresholdButton] = useState(false);

  const [renderedComponent, setRenderedComponent] = useState(
    <ThresholdTable />
  );

  const handleThresholdButtonClick = (e) => {
    setRenderedComponent(<AddThresholdForm title="New Threshold" />);
    setHideThresholdButton(true);
  };

  const thresholdButton = hideThresholdButton ? null : (
    <Button
      className="btn-round mr-2 my-2"
      color="info"
      onClick={handleThresholdButtonClick}
    >
      <i className="tim-icons icon-simple-add" /> New Threshold
    </Button>
  );

  return (
    <div className="content">
      <Row>
        <OverviewDashboardCards />
      </Row>
      {thresholdButton}
      {renderedComponent}
    </div>
  );
};

export default ThresholdSettings;
