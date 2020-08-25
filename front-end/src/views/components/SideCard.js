import React from "react";
import classNames from "classnames";

import { Col, Card, CardBody, Table } from "reactstrap";

const SideCard = (props) => {
    const details = props.cardValues.map(e => {
        return (
            <tr>
                <td>{e.name}</td>
                <td className="text-left">{e.value}</td>
            </tr>
        )
    })
    return (
        <>
            <Col lg={props.width}>
                <Card>
                    <CardBody>
                        <Table responsive>
                            <tbody>
                                {details}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>
        </>
    )
};

export default SideCard; 