import React from "react";

import ReactWizard from "react-bootstrap-wizard";

import { Col } from "reactstrap";

import ProfileStep from "./ProfileStep";
import AvatarStep from "./AvatarStep";
import AccountStep from "./AccountStep";

const AddAccountWizard = (props) => {
  let steps = [];
  if (props.accountAction === "add") {
    steps = [
      {
        stepName: "Profile",
        stepIcon: "tim-icons icon-single-02",
        component: ProfileStep,
      },
      {
        stepName: "Avatar",
        stepIcon: "tim-icons icon-settings-gear-63",
        component: AvatarStep,
      },
      {
        stepName: "Account",
        stepIcon: "tim-icons icon-key-25",
        component: AccountStep,
      },
    ];
  } else {
    steps = [
      {
        stepName: "Profile",
        stepIcon: "tim-icons icon-single-02",
        component: ProfileStep,
        stepProps: {
          employee: props.employee,
          accountAction: props.accountAction,
        },
      },
      {
        stepName: "Avatar",
        stepIcon: "tim-icons icon-settings-gear-63",
        component: AvatarStep,
        stepProps: { employee: null, accountAction: props.accountAction },
      },
      {
        stepName: "Account",
        stepIcon: "tim-icons icon-key-25",
        component: AccountStep,
        stepProps: { employee: null, accountAction: props.accountAction },
      },
    ];
  }

  const handleFinishButtonClick = (allStates) => {
    console.log(allStates);
  };

  return (
    <>
      <div className="content">
        <Col className="mr-auto ml-auto" md="10">
          <ReactWizard
            steps={steps}
            navSteps
            validate
            title="Build Your Profile"
            description="This information will let us know more about you."
            headerTextCenter
            finishButtonClasses="btn-wd btn-info"
            nextButtonClasses="btn-wd btn-info"
            previousButtonClasses="btn-wd"
            progressbar
            color="blue"
            finishButtonClick={handleFinishButtonClick}
          />
        </Col>
      </div>
    </>
  );
};

export default AddAccountWizard;
