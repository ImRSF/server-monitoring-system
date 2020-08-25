import React from "react";

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
    Input
  } from "reactstrap";

const StackedForm = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Stacked Form</CardTitle>
        </CardHeader>
        <CardBody>
          <Form action="#">
            <label>Email address</label>
            <FormGroup>
              <Input type="email" />
            </FormGroup>
            <label>Password</label>
            <FormGroup>
              <Input type="password" autoComplete="off" />
            </FormGroup>
            <FormGroup check className="mt-3">
              <Label check>
                <Input type="checkbox" />
                <span className="form-check-sign" />
                Subscribe to newsletter
              </Label>
            </FormGroup>
          </Form>
        </CardBody>
        <CardFooter>
          <Button className="btn-fill" color="primary" type="submit">
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default StackedForm;
