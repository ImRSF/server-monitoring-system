import React from "react";

import { Modal } from "reactstrap";

import { useStore } from "../../../hooks/store";

import DataTable from "../../../components/DataTable/DataTable";

const EmployeeList = (props) => {
  const dispatch = useStore(false)[1];
  const columns = [
    {
      Header: (
        <div style={{ backgroundColor: "#00BF9A" }} className="text-center">
          Employee
        </div>
      ),
      columns: [
        {
          Header: <div className="text-center">No.</div>,
          accessor: "EmployeeNo",
          className: "text-center",
        },
        {
          Header: <div className="text-center">Name</div>,
          accessor: "EmployeeName",
          className: "text-center",
          width: 170
        },
        {
          Header: <div className="text-center">Position</div>,
          accessor: "EmployeePosition",
          className: "text-center",
          width: 170
        },
      ],
    },
    {
      Header: (
        <div style={{ backgroundColor: "#D250DB" }} className="text-center">
          Workgroup
        </div>
      ),
      columns: [
        {
          Header: <div className="text-center">Company</div>,
          accessor: "Company",
          className: "text-center",
        },
        {
          Header: <div className="text-center">Department</div>,
          accessor: "Department",
          className: "text-center",
        },
        {
          Header: <div className="text-center">Section</div>,
          accessor: "Section",
          className: "text-center",
        },
      ],
    },
  ];
  const data = [
    {
      EmployeeNo: "000001",
      EmployeeName: "AMODIA, REYNALDO",
      EmployeePosition: "Hardware Administrator",
      Company: "AAC",
      Department: "FINANCE",
      Section: "ISS",
    },
    {
      EmployeeNo: "000002",
      EmployeeName: "ENRIQUEZ, ALDWIN",
      EmployeePosition: "Network Administrator",
      Company: "AAC",
      Department: "FINANCE",
      Section: "ISS",
    },
  ];
  return (
    <Modal
      modalClassName="modal-black"
      isOpen={props.modalEmployee}
      toggle={props.toggleModalEmployee}
      size="lg"
    >
      <DataTable
        width={12}
        title={"Employee List"}
        data={data}
        allowExport={false}
        sortable={false}
        columns={columns}
        getTdProps={(state, rowInfo, column, instance) => {
          return {
            onClick: () => {
              props.getEmployee(rowInfo.original)
              props.toggleModalEmployee();
            },
          };
        }}
        minRows="undefined"
        showPaginationBottom={false}
      />
    </Modal>
  );
};

export default EmployeeList;
