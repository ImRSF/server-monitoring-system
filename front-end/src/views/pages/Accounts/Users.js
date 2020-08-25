import React, { useState } from "react";

import { Row, Button } from "reactstrap";

import OverviewDashboardCards from "../../cards/DashboardCards/OverviewDashboardCards";
import AddAccountWizard from "../../forms/Accounts/AddAccountForm/AddAccountWizard";
import UsersTable from "../../tables/Accounts/UsersTable";

const UserAccess = () => {
  const handleAddAccountButtonClick = () => {
    setRenderedComponent(
      <AddAccountWizard
        accountAction="edit"
        employee={{
          EmployeeNo: "000001",
          EmployeeName: "AMODIA, REYNALDO",
          EmployeePosition: "Hardware Administrator",
          Company: "AAC",
          Department: "FINANCE",
          Section: "ISS",
        }}
      />
    );
    setRenderedButton(null);
  };

  const [renderedButton, setRenderedButton] = useState(
    <Button
      className="btn-round mr-2 my-2"
      color="info"
      onClick={handleAddAccountButtonClick}
    >
      <i className="tim-icons icon-simple-add" /> New Account
    </Button>
  );

  const [renderedComponent, setRenderedComponent] = useState(<UsersTable />);

  return (
    <div className="content">
      <Row>
        <OverviewDashboardCards />
      </Row>
      {renderedButton}
      {renderedComponent}
    </div>
  );
};

export default UserAccess;
