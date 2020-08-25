import React, { Component } from "react";
// react component for creating dynamic tables

import ReactTable from "react-table";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class DataTable extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState ? true : false;
  }

  render(props) {
    const allowExport = (
      <div className="tools float-right">
        <UncontrolledDropdown>
          <DropdownToggle
            caret
            className="btn-link btn-icon"
            color="default"
            data-toggle="dropdown"
            type="button"
          >
            <i className="tim-icons icon-single-copy-04" />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem href="#pablo" onClick={(e) => alert("sd")}>
              Export as PDF
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
    return (
      <>
        <Row>
          <Col xs={this.props.width} md={this.props.width}>
            <Card>
              <CardHeader>
                {this.props.allowExport ? allowExport : null}
                <CardTitle tag="h3">{this.props.title}</CardTitle>
              </CardHeader>
              <CardBody>
                <ReactTable
                  data={this.props.data}
                  {...this.props}
                  columns={this.props.columns}
                  className="-striped -highlight"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default DataTable;
