import React from "react";
import classNames from "classnames";

import { Row, Col, Card, CardBody, CardTitle, CardFooter } from 'reactstrap'

const DashboardCard = (props) => {
    return (
        <Col lg="3" md="6">
            <Card className="card-stats">
                <CardBody>
                    <Row>
                        <Col xs="3">
                            <div className={classNames("info-icon", "text-center", props.imageClass)}>
                                <i className={classNames("tim-icons", props.cardImage)} />
                                {/* <i className="tim-icons icon-chat-33" /> */}
                            </div>
                        </Col>
                        <Col xs="9">
                            <div className="numbers">
                                <p className="card-category">{props.cardHeader}</p>
                                <CardTitle tag="h3">{props.cardDetails}</CardTitle>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter>
                    <hr />
                    <div className="stats">
                        {/* <i className="tim-icons icon-refresh-01" /> {props.cardFooter} */}
                        <i className={classNames("tim-icons", props.cardFooterImage)} /> {props.cardFooter}
                    </div>
                </CardFooter>
            </Card>
        </Col>
    )
};

export default DashboardCard; 