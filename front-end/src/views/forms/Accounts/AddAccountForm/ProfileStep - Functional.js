import React, { useState, useImperativeHandle } from "react";
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

const ProfileStep = (props, ref) => {
  const [modalEmployee, setModalEmployee] = useState(false);
  const [category, setCategory] = useState([]);

  const handleSelectedCategory = (e) => {
    const selectedCategory = category;
    if (e.target.checked) {
      selectedCategory.push(e.target.value);
      setCategory(selectedCategory);
    } else {
      setCategory(selectedCategory.filter((el) => el !== e.target.value));
    }
  };

  useImperativeHandle(ref, () => ({
    isValidated: () => {
      alert("ddd")
      return false
    },
  }));

  const toggleModalEmployee = () => {
    setModalEmployee(true);
    console.log(this.state);
  };

  return (
    <>
      <EmployeeList
        modalEmployee={modalEmployee}
        toggleModalEmployee={toggleModalEmployee}
      />
      <h5 className="info-text">Tell us about yourself!</h5>
      <Row className="justify-content-center mt-3">
        <Col sm="12" className="my-2">
          <Button
            block
            className="btn-round"
            color="success"
            onClick={toggleModalEmployee}
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
              name="firstname"
              placeholder="First Name..."
              // readOnly
              type="text"
            />
          </InputGroup>
          <InputGroup>
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
            />
          </InputGroup>
        </Col>
        <Col sm="4">
          <InputGroup>
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
            />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-mobile pr-4" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              name="number"
              placeholder="Department"
              readOnly
              type="number"
            />
          </InputGroup>
        </Col>
        <Col sm="4">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-pencil pr-4" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              name="lastname"
              placeholder="Last Name..."
              readOnly
              type="text"
            />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-mobile pr-4" />
              </InputGroupText>
            </InputGroupAddon>
            <Input name="number" placeholder="Section" type="text" readOnly />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col sm="4">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-settings pr-4" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              name="address"
              placeholder="Positiosn"
              readOnly
              type="text"
            />
          </InputGroup>
        </Col>
        <Col sm="3">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-time-alarm pr-4" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              name="address"
              placeholder="Date Created"
              readOnly
              type="text"
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
                onChange={(e) => handleSelectedCategory(e)}
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
                onChange={(e) => handleSelectedCategory(e)}
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
                onChange={(e) => handleSelectedCategory(e)}
              />
              <span className="form-check-sign" />
              Network
            </Label>
          </FormGroup>
        </Col>
      </Row>
    </>
  );
};

export default React.forwardRef(ProfileStep);
