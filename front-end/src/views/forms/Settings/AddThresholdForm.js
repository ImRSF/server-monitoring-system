import React, { useState } from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import { withRouter } from "react-router-dom";
import Select from "react-select";

import ThresholdPointTable from "../../tables/Settings/ThresholdPointTable";
import ThresholdPointForm from "../../forms/Settings/ThresholdPointForm";

import { getCurrentDate } from "../../../utils/helpers";

const AddThresholdForm = (props) => {
  const [modalState, setModalState] = useState(false);

  const toggleModalAddThresholdPoint = () => {
    setModalState(!modalState);
  };

  let component = (
    <>
      <Row>
        <Col>
          <Form>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">{props.title}</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="form-row">
                  <FormGroup className="col-md-6">
                    <Label for="ThresholdNumber">Threshold Number</Label>
                    <Input type="text" id="ThresholdNumber" readOnly />
                  </FormGroup>
                  <FormGroup className="col-md-6">
                    <Label for="CategoryName">Category</Label>
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
                          value: "Software",
                          label: "Software",
                        },
                        {
                          value: "Hardware",
                          label: "Hardware",
                        },
                        {
                          value: "Network",
                          label: "Network",
                        },
                      ]}
                      placeholder="Select Category"
                    />
                  </FormGroup>
                </div>
                <div className="form-row">
                  <FormGroup className="col-md-6">
                    <Label for="CreatedBy">Created By</Label>
                    <Input type="text" id="CreatedBy" readOnly />
                  </FormGroup>
                  <FormGroup className="col-md-6">
                    <Label for="DateCreated">Date Created</Label>
                    <Input
                      type="text"
                      id="CreatedBy"
                      readOnly
                      value={getCurrentDate()}
                    />
                  </FormGroup>
                </div>
                <FormGroup>
                  <Label for="ThresholdDescription">Description</Label>
                  <Input
                    type="textarea"
                    name="text"
                    id="ThresholdDescription"
                  />
                </FormGroup>
                <FormGroup>
                  <Button
                    className="btn-round my-2"
                    color="primary"
                    type="button"
                    onClick={toggleModalAddThresholdPoint}
                  >
                    Add Threshold Point
                  </Button>
                  <ThresholdPointTable
                    viewThresholdPoint={props.viewThresholdPoint}
                    ediThresholdPoint={props.editThresholdPoint}
                    deleteThresholdPoint={props.deleteThresholdPoint}
                  />
                </FormGroup>
              </CardBody>
              <CardFooter>
                <div className="form-row">
                  <FormGroup className="col-md-6">
                    <Button
                      type="button"
                      block
                      className="mb-3"
                      color="success"
                      href="#pablo"
                      onClick={props.saveThresholdPoint}
                      size="lg"
                    >
                      Add Threshold
                    </Button>
                  </FormGroup>
                  <FormGroup className="col-md-6">
                    <Button
                      type="button"
                      block
                      className="mb-3"
                      color="danger"
                      href="#pablo"
                      size="lg"
                      onClick={() => {
                        props.history.push("settings/threshold");
                        props.history.goBack();
                      }}
                    >
                      Go back
                    </Button>
                  </FormGroup>
                </div>
              </CardFooter>
            </Card>
          </Form>
        </Col>
      </Row>
    </>
  );

  return (
    <>
      <ThresholdPointForm
        modal={modalState}
        toggleModal={toggleModalAddThresholdPoint}
        title="Add Threshold Point"
      />
      {component}
    </>
  );
};

export default withRouter(AddThresholdForm);
