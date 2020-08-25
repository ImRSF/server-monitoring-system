import React from "react";

import { Row, BreadcrumbItem } from "reactstrap";

const TableNavigation = () => {
  return (
    <>
      <Row>
        <ol className="breadcrumb bg-transparent ml-3">
          <BreadcrumbItem>
            <h4>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                Home
              </a>
            </h4>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              {" "}
              Library
            </a>
          </BreadcrumbItem>
          <BreadcrumbItem className="active">Data</BreadcrumbItem>
        </ol>
      </Row>
    </>
  );
};

export default TableNavigation;
