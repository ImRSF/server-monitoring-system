import { initStore } from "../hooks/store";

import { updateObject } from "../utils/helpers";

const configureStore = () => {
  const actions = {
    GET_ISS_EMPLOYEE_DETAILS: (curState, employeeDetails) =>
      updateObject(curState, { addAccount: { profile: employeeDetails } }),
  };
  initStore(actions, {
    addAccount: {
      profile: {},
    },
  });
};

export default configureStore;
