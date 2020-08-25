import React from "react";

import Select from "react-select";

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
  Modal,
} from "reactstrap";

import { getCurrentDate } from "../../../utils/helpers";

const ThresholdPointForm = (props) => {
  return (
    <Modal
      isOpen={props.modal}
      toggle={props.toggleModal}
      autoFocus={true}
      size="lg"
      centered={true}
      modalClassName="modal-black"
    >
      <Row>
        <Col>
          <Form>
            <Card>
              <CardHeader>
                <div className="form-row">
                  <FormGroup className="col-md-6">
                    <CardTitle tag="h4">{props.title}</CardTitle>
                  </FormGroup>
                  <FormGroup className="col-md-6 mr-auto">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={props.toggleModal}
                    >
                      <i
                        className="tim-icons icon-simple-remove"
                        style={{ color: "white" }}
                      ></i>
                    </button>
                  </FormGroup>
                </div>
              </CardHeader>
              <CardBody>
                <div className="form-row">
                  <FormGroup className="col-md-6">
                    <Label for="CategoryName">Threshold Item</Label>
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
                          value: "1",
                          label: "CPU Temperature",
                        },
                        {
                          value: "2",
                          label: "CPU Voltage",
                        },
                        {
                          value: "3",
                          label: "CPU Utilization",
                        },
                      ]}
                      placeholder="CPU Temperature"
                    />

                    {/* <Input type="select" name="select" id="CategoryName">
                      <option>Software</option>
                      <option>Hardware</option>
                      <option>Network</option>
                    </Input> */}
                  </FormGroup>
                  <FormGroup className="col-md-6">
                    <Label for="ThresholdNumber">Symbol</Label>
                    <Input
                      type="text"
                      id="ThresholdNumber"
                      readOnly
                      value="Celsius"
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
                <div className="form-row">
                  <FormGroup className="col-md-6">
                    <Label for="CategoryName">Comparator</Label>
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
                          value: "1",
                          label: "Greater Than",
                        },
                        {
                          value: "2",
                          label: "Less Than",
                        },
                        {
                          value: "3",
                          label: "Equal To",
                        },
                        {
                          value: "4",
                          label: "Not Equal To",
                        },
                      ]}
                      placeholder="Select Comparator"
                    />

                    {/* <Input type="select" name="select" id="CategoryName">
                      <option>Software</option>
                      <option>Hardware</option>
                      <option>Network</option>
                    </Input> */}
                  </FormGroup>
                  <FormGroup className="col-md-6">
                    <Label for="ThresholdNumber">Value</Label>
                    <Input
                      type="text"
                    //   id="ThresholdNumber"
                    //   value="Celsius"
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
                      onClick={props.toggleModal}
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
      {/* </ModalBody> */}
    </Modal>
  );
};

export default ThresholdPointForm;
