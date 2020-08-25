import React from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Row,
  Col,
} from "reactstrap";

const HorizontalForm = (props) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle tag="h4">{props.title}</CardTitle>
        </CardHeader>
        <CardBody>
          <Form className="form-horizontal">
            <Row>
              <Label md="2">Username</Label>
              <Col md="10">
                <FormGroup>
                  <Input type="text" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Label md="2">Email</Label>
              <Col md="10">
                <FormGroup>
                  <Input type="email" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Label md="2">Password</Label>
              <Col md="10">
                <FormGroup>
                  <Input type="password" autoComplete="off" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Label md="2" />
              <Col md="10">
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" />
                    <span className="form-check-sign" />
                    Remember me
                  </Label>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
        <CardFooter>
          <Form className="form-horizontal">
            <Row>
              <Label md="2" />
              <Col md="10">
                <Button className="btn-fill" color="primary" type="submit">
                  Sign in
                </Button>
              </Col>
            </Row>
          </Form>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HorizontalForm;
