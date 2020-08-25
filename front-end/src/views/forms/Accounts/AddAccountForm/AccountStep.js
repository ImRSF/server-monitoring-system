import React from "react";

import { FormGroup, Input, Row, Col } from "reactstrap";
import Select from "react-select";

class AccountStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step3Select: null,
    };
  }
  isValidated() {
    return true;
  }
  finishButtonClick(allStates) {
    console.log(allStates);
  }
  render() {
    return (
      <>
        <form>
          <Row className="justify-content-center">
            <Col sm="12">
              <h5 className="info-text">
                Dont worry! Your account is safe here!
              </h5>
            </Col>
            <Col sm="6">
              <FormGroup>
                <label>Email Address</label>
                <Input type="email" />
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <label>User Group</label>
                <Select
                  className="react-select info"
                  classNamePrefix="react-select"
                  name=""
                  onChange={(value) => this.setState({ step3Select: value })}
                  value={this.state.step3Select}
                  options={[
                    { value: "1", label: "User" },
                    { value: "2", label: "Super User" },
                  ]}
                  placeholder="Select User Group"
                />
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <label>Username</label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <label>Password</label>
                <Input type="password" />
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <label>Confirm Password</label>
                <Input type="password" />
              </FormGroup>
            </Col>
          </Row>
        </form>
      </>
    );
  }
}

export default AccountStep;
