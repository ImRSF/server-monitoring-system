import React, { Component } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// react plugin for creating vector maps

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

// core components
import { chartExample1, chartExample2 } from "variables/charts.js";

import OverviewDashboardCards from "../views/cards/DashboardCards/OverviewDashboardCards";
import AreaChart from "../components/Charts/AreaChart";
import SoftwareProcessTable from "../views/tables/Software/SoftwareProcessTable";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
    };
  }
  setBgChartData = (name) => {
    this.setState({
      bigChartData: name,
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState ? true : false;
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            {/* Cards */}
            <OverviewDashboardCards />

            {/* Hardware Statistics */}
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">Hardware Statistics</h5>
                      <CardTitle tag="h2">*CPU* Performance</CardTitle>
                    </Col>
                    <Col sm="6">
                      <ButtonGroup
                        className="btn-group-toggle float-right"
                        data-toggle="buttons"
                      >
                        <Button
                          color="info"
                          id="0"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data1",
                          })}
                          onClick={() => this.setBgChartData("data1")}
                        >
                          <input defaultChecked name="options" type="radio" />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            CPU
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="1"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data2",
                          })}
                          onClick={() => this.setBgChartData("data2")}
                        >
                          <input name="options" type="radio" />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Memory
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-gift-2" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="2"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data3",
                          })}
                          onClick={() => this.setBgChartData("data3")}
                        >
                          <input name="options" type="radio" />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Disk
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-tap-02" />
                          </span>
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample1[this.state.bigChartData]}
                      options={chartExample1.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>

            {/* Network Statistics */}
            <AreaChart
              width="12"
              header="Network Statistics"
              title="Throughput"
              chartData={chartExample2.data}
              chartOptions={chartExample2.options}
            />
          </Row>

          {/* Software Processes */}
          <SoftwareProcessTable />
        </div>
      </>
    );
  }
}

export default Dashboard;
