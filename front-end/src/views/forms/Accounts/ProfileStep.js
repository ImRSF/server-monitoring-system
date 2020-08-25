import React from "react";
import classnames from "classnames";
// reactstrap components
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

import EmployeeList from "../../../tables/Lists/EmployeeList";

import {
  verifyEmail,
  verifyLength,
  verifyNumber,
} from "../../../../utils/validator";

import { updateObject } from "../../../../utils/helpers";

class ProfileStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      firstnameState: "",
      lastnameState: "",
      emailState: "",
      category: [],
      categoryState: "",
      modalEmployee: false,
    };
  }

  change = (event, stateName, type, stateNameEqualTo, maxValue) => {
    switch (type) {
      case "email":
        if (verifyEmail(event.target.value)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "length":
        if (verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "number":
        if (verifyNumber(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  };

  handleSelectedCategory = (e) => {
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

  isValidated = () => {
    if (this.state.category.length) {
      this.setState({categoryState: "has-danger"})
      return false
    } else {
      return true;
    }
    // return false
   
    // if (
    //   this.state.firstnameState === "has-success" &&
    //   this.state.lastnameState === "has-success" &&
    //   this.state.emailState === "has-success" &&
    //   this.state.phoneState === "has-success"
    // ) {
    //   return true;
    // } else {
    //   if (this.state.firstnameState !== "has-success") {
    //     this.setState({ firstnameState: "has-danger" });
    //   }
    //   if (this.state.lastnameState !== "has-success") {
    //     this.setState({ lastnameState: "has-danger" });
    //   }
    //   if (this.state.emailState !== "has-success") {
    //     this.setState({ emailState: "has-danger" });
    //   }
    //   if (this.state.phoneState !== "has-success") {
    //     this.setState({ phoneState: "has-danger" });
    //   }
    //   return false;
    // }
  };
  toggleModalEmployee = () => {
    this.setState({
      modalEmployee: !this.state.modalEmployee,
    });
    console.log(this.state)
  };
  render() {
    console.log(this.props.state);
    return (
      <>
        <EmployeeList
          modalEmployee={this.state.modalEmployee}
          toggleModalEmployee={this.toggleModalEmployee}
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
            <InputGroup
            // className={classnames(this.state.firstnameState, {
            //   "input-group-focus": this.state.firstnameFocus,
            // })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-single-02 pr-4" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="firstname"
                placeholder="First Name..."
                // readOnly
                type="text"
                value={this.props.state.addAccount.profile.EmployeeName}
                // onChange={(e) => this.change(e, "firstname", "length", 1)}
                // onFocus={(e) => this.setState({ firstnameFocus: true })}
                // onBlur={(e) => this.setState({ firstnameFocus: false })}
              />
              {/* {this.state.firstnameState === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null} */}
            </InputGroup>
            <InputGroup
            // className={classnames(this.state.emailState, {
            //   "input-group-focus": this.state.emailFocus,
            // })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-email-85 pr-4" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="email"
                placeholder="Company"
                // readOnly
                type="text"
                // onChange={(e) => this.change(e, "email", "email")}
                // onFocus={(e) => this.setState({ emailFocus: true })}
                // onBlur={(e) => this.setState({ emailFocus: false })}
              />
              {/* {this.state.emailState === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null} */}
            </InputGroup>
          </Col>
          <Col sm="4">
            <InputGroup
            // className={classnames(this.state.lastnameState, {
            //   "input-group-focus": this.state.lastnameFocus,
            // })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-caps-small pr-4" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="lastname"
                placeholder="Middle Name..."
                // readOnly
                type="text"
                // onChange={(e) => this.change(e, "lastname", "length", 1)}
                // onFocus={(e) => this.setState({ lastnameFocus: true })}
                // onBlur={(e) => this.setState({ lastnameFocus: false })}
              />
              {/* {this.state.lastnameState === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null} */}
            </InputGroup>
            <InputGroup
            // className={classnames(this.state.phoneState, {
            //   "input-group-focus": this.state.phoneFocus,
            // })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-mobile pr-4" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="number"
                placeholder="Department"
                // readOnly
                type="number"
                // onChange={(e) => this.change(e, "phone", "number")}
                // onFocus={(e) => this.setState({ phoneFocus: true })}
                // onBlur={(e) => this.setState({ phoneFocus: false })}
              />
              {/* {this.state.phoneState === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null} */}
            </InputGroup>
          </Col>
          <Col sm="4">
            <InputGroup
            // className={classnames(this.state.lastnameState, {
            //   "input-group-focus": this.state.lastnameFocus,
            // })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-pencil pr-4" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="lastname"
                placeholder="Last Name..."
                // readOnly
                type="text"
                // onChange={(e) => this.change(e, "lastname", "length", 1)}
                // onFocus={(e) => this.setState({ lastnameFocus: true })}
                // onBlur={(e) => this.setState({ lastnameFocus: false })}
              />
              {/* {this.state.lastnameState === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null} */}
            </InputGroup>
            <InputGroup
            // className={classnames(this.state.phoneState, {
            //   "input-group-focus": this.state.phoneFocus,
            // })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-mobile pr-4" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="number"
                placeholder="Section"
                type="text"
                // readOnly
                // onChange={(e) => this.change(e, "phone", "number")}
                // onFocus={(e) => this.setState({ phoneFocus: true })}
                // onBlur={(e) => this.setState({ phoneFocus: false })}
              />
              {/* {this.state.phoneState === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null} */}
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <InputGroup
            // className={classnames({
            //   "input-group-focus": this.state.addressFocus,
            // })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-settings pr-4" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="address"
                placeholder="Positiosn"
                // readOnly
                type="text"
                // onFocus={(e) => this.setState({ addressFocus: true })}
                // onBlur={(e) => this.setState({ addressFocus: false })}
              />
            </InputGroup>
          </Col>
          <Col sm="3">
            <InputGroup
            // className={classnames({
            //   "input-group-focus": this.state.addressFocus,
            // })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-time-alarm pr-4" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="address"
                placeholder="Date Created"
                // readOnly
                type="text"
                // onFocus={(e) => this.setState({ addressFocus: true })}
                // onBlur={(e) => this.setState({ addressFocus: false })}
              />
            </InputGroup>
          </Col>
          <Label sm="2">Allow Threshold Settings</Label>
          <Col sm="2">
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  value="Hardware"
                  // onChange={(e) => this.change(e, "firstname", "length", 1)}
                  onChange={(e) => this.handleSelectedCategory(e)}
                />
                <span className="form-check-sign" />
                Hardware
              </Label>
            </FormGroup>
            <FormGroup check>
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
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  value="Network"
                  onChange={(e) => this.handleSelectedCategory(e)}
                />
                <span className="form-check-sign" />
                Network
              </Label>
            </FormGroup>
          </Col>
        </Row>
      </>
    );
  }
}

export default ProfileStep;
