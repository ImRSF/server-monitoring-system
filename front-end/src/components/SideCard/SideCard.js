import React from "react";

import { Col, Card, CardHeader, CardTitle, CardBody, Table } from "reactstrap";

const SideCard = (props) => {
  const details = props.cardValues.map((e) => {
    return (
      <tr>
        <td>{e.name}</td>
        <td className="text-left">{e.value}</td>
      </tr>
    );
  });
  return (
    <>
      <Col lg={props.width}>
        <Card>
          <CardHeader>
            {props.title ? (
              <CardTitle>
                <h3>{props.title}</h3>
              </CardTitle>
            ) : null}
          </CardHeader>

          <CardBody>
            <Table responsive>
              <tbody>{details}</tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default SideCard;
