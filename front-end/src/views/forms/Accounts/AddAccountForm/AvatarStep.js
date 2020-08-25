import React from "react";

import { Row, Col } from "reactstrap";

import Alert from "../../../../components/Alerts/Alert";
import ImageUpload from "components/CustomUpload/ImageUpload.js";

class AvatarStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: null,
      errorAlert: null,
    };
  }

  getProfileImage = (file = "") => {
    this.setState({ profileImage: file });
  };

  setInvalidFileError = (error = null) => {
    this.setState({ errorAlert: error });
  };

  render() {
    console.log(this.state)
    return (
      <>
        {this.state.errorAlert}
        <h5 className="info-text">Select an avatar!</h5>
        <Row className="justify-content-center">
          <Col className="text-center" lg="10">
            <ImageUpload
              changeBtnClasses="btn-simple"
              addBtnClasses="btn-simple"
              removeBtnClasses="btn-simple"
              getProfileImage={this.getProfileImage}
              setError={this.setInvalidFileError}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default AvatarStep;
