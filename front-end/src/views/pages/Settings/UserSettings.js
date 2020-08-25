import React from "react";

import { Row, Col } from "reactstrap";

import HorizontalForm from "../../../components/Forms/HorizontalForm";

const UserSettings = () => {
  return (
    <div className="content">
      <Row>
          <Col md="6">
              <HorizontalForm title="Theme Settings"/>
          </Col>
      </Row>
    </div>
  )
};

export default UserSettings;
