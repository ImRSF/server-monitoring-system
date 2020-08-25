import React from "react";

import ReactBSAlert from "react-bootstrap-sweetalert";

const Alert = (props) => {
  const messages = props.messages.map((e, i) => (
    <span key={i}>
      {i + 1 + ". " + e}
      <br></br>
    </span>
  ));
  switch (props.className) {
    case "error":
      return (
        <ReactBSAlert
          error
          style={{ display: "block", marginTop: "-100px" }}
          title={props.title}
          onConfirm={props.onConfirm}
          onCancel={props.onCancel}
          confirmBtnBsStyle="error"
          btnSize=""
        >
          {messages}
        </ReactBSAlert>
      );
    case "success":
      return (
        <ReactBSAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title={props.title}
          onConfirm={() => props.onConfirm}
          onCancel={() => props.onCancel}
          confirmBtnBsStyle="success"
          btnSize=""
        >
          {props.successMessage}
        </ReactBSAlert>
      );

    default:
      break;
  }
  return <></>;
};

export default Alert;
