import React from "react";
import classNames from "classnames";

import { Col, Card, CardBody, CardTitle, CardHeader } from "reactstrap";
import { Line } from "react-chartjs-2";

const AreaChart = (props) => {
  return (
    <Col lg={props.width}>
      <Card className="card-chart">
        <CardHeader>
          <h5 className="card-category">{props.header}</h5>
          <CardTitle tag="h3">
            <i className="tim-icons icon-bell-55 text-primary" />{" "}
              {props.title}
            </CardTitle>
        </CardHeader>
        <CardBody>
          <div className="chart-area">
            <Line
              data={props.chartData}
              options={props.chartOptions}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
};

export default AreaChart; 