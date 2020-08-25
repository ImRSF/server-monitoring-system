import React from "react";

import {
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Label,
  FormGroup,
  Button,
} from "reactstrap";

import Alert from "../../../../components//Alerts/Alert";

import EmployeeList from "../../../tables/Lists/EmployeeList";

class ProfileStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      configureServer: true,
      modalEmployee: false,
      errorAlert: null,
      errorClass: "",
      employee: this.props.employee || {
        EmployeeName: "",
      },
    };
  }

  handleSelectedCategory = (e) => {
    this.setState({ errorClass: "" });
    const selectedCategory = this.state.category;
    if (e.target.checked) {
      selectedCategory.push(e.target.value);
      this.setState({ category: selectedCategory });
    } else {
      this.setState({
        category: selectedCategory.filter((el) => el !== e.target.value),
      });
    }
  };

  handleConfigureServer = () => {
    this.setState({ configureServer: !this.state.configureServer });
  };

  isValidated = () => {
    const messages = [];
    if (!this.state.category.length) {
      this.setState({ errorClass: "has-danger" });
      messages.push("Please check any of the fields marked in red.");
    }
    if (!this.state.employee.EmployeeName) {
      messages.push("Please select an employee.");
    }

    if (messages.length) {
      this.setState({
        errorAlert: (
          <Alert
            title="Invalid Value"
            className="error"
            messages={messages}
            onConfirm={() => this.setState({ errorAlert: null })}
            onCancel={() => this.setState({ errorAlert: null })}
          />
        ),
      });
      return false;
    }
    return true;
  };
  toggleModalEmployee = () => {
    this.setState({
      modalEmployee: !this.state.modalEmployee,
    });
  };

  getEmployee = (employee = "") => {
    this.setState({ employee: employee });
  };

  render() {
    let formValues = this.state.employee;

    return (
      <>
        {this.state.errorAlert}
        <EmployeeList
          modalEmployee={this.state.modalEmployee}
          toggleModalEmployee={this.toggleModalEmployee}
          getEmployee={this.getEmployee}
        />
        <h5 className="info-text">Tell us about yourself!</h5>
        <Row className="justify-content-center mt-3">
          <Col sm="12" className="my-2">
            <Button
              block
              className="btn-round"
              color="success"
              onClick={this.toggleModalEmployee}
            >
              Select Employee
            </Button>
          </Col>
          <Col sm="4">
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-single-02 pr-4" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="First Name"
                readOnly
                type="text"
                value={formValues.EmployeeName}
              />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-bank pr-4" />
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Company" readOnly type="text" />
            </InputGroup>
          </Col>
          <Col sm="4">
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-caps-small pr-4" />
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Middle Name" readOnly type="text" />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-badge pr-4" />
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Department" readOnly type="number" />
            </InputGroup>
          </Col>
          <Col sm="4">
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-pencil pr-4" />
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Last Name" readOnly type="text" />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-credit-card pr-4" />
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Section" type="text" readOnly />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="3">
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-settings pr-4" />
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Position" readOnly type="text" />
            </InputGroup>
          </Col>
          <Col sm="3">
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-calendar-60 pr-4" />
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Date Created" readOnly type="text" />
            </InputGroup>
          </Col>
          <Label sm="2">Configure Threshold Settings</Label>
          <Col>
            <FormGroup check className={this.state.errorClass}>
              <Label check>
                <Input
                  type="checkbox"
                  value="Hardware"
                  onChange={(e) => this.handleSelectedCategory(e)}
                />
                <span className="form-check-sign" />
                Hardware
              </Label>
            </FormGroup>
            <FormGroup check className={this.state.errorClass}>
              <Label check>
                <Input
                  type="checkbox"
                  value="Software"
                  onChange={(e) => this.handleSelectedCategory(e)}
                />
                <span className="form-check-sign" />
                Software
              </Label>
            </FormGroup>
            <FormGroup check className={this.state.errorClass}>
              <Label check>
                <Input
                  invalid
                  type="checkbox"
                  value="Network"
                  onChange={(e) => this.handleSelectedCategory(e)}
                />
                <span className="form-check-sign" />
                Network
              </Label>
            </FormGroup>
          </Col>
          <Col sm="2">
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  value="Server"
                  onChange={this.handleConfigureServer}
                />
                <span className="form-check-sign" />
                Configure Server Settings
              </Label>
            </FormGroup>
          </Col>
        </Row>
      </>
    );
  }
}

export default ProfileStep;
