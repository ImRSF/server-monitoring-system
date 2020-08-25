import React from "react";

import DataTable from "../../../components/DataTable/DataTable";

const HardwarePeripheralsTable = () => {
  const columns = [
    {
      Header: "Device",
      accessor: "Device",
    },
    {
      Header: "Manufacturer/Vendor",
      accessor: "Manufacturer",
    },
    {
      Header: "Type/Model",
      accessor: "Type",
    },
    {
      Header: "Serial No.",
      accessor: "SerialNo"
    },
    {
      Header: <div className="text-left">Specifications</div>,
      accessor: "Specifications",
      width: 300
    },
  ];
  const data = [
    // CPU
    {
      Device: "CPU",
      Manufacturer: "Intel(R)",
      // Type is Brand in CPU
      Type: "Core™ i9-9900",
      SerialNo: "191301800524",
      // Specs is "Manufacturer + Type + Device + MaxSpeed"
      Specifications: "Intel(R) Core™ i9-9900 CPU @ 3.90 GHz"
    },
    // Memory
    {
      Device: "Memory",
      Manufacturer: "029E",
      Type: "DDR4",
      SerialNo: "191301800524",
      // Specs is "Manufacturer + Size(GB) + Type "
      Specifications: "029E 12.0 GB DDR4"
    },
    {
      Device: "Memory",
      Manufacturer: "029E",
      Type: "DDR3",
      SerialNo: "191301800524",
      // Specs is "Manufacturer + Size(GB) + Type "
      Specifications: "029E 4.0 GB DDR3"
    },
    // Disks
    {
      Device: "Hard Disk",
      // Manufacturer is Vendor
      Manufacturer: "Samsung",
      Type: "HDD",
      SerialNo: "191301800524",
      // Specs is "name + type + size(GB) + Type"
      Specifications: "SAMSUNG xxxxxxxxxxxx-xxxx HDD 1.0 TB"
    },
    // Motherboard/Baseboard
    {
      Device: "Motherboard",
      Manufacturer: "ASRock",
      // Type is Model
      Type: "H310M-STX",
      SerialNo: "191301800524",
      // Specs is "Manufacturer + Type"
      Specifications: "ASRock H310M-STX"
    }
  ];

  return (
    <DataTable
      width={12}
      title={"Hardware Peripherals"}
      data={data}
      columns={columns}
      minRows="undefined"
      showPaginationBottom={false}
    />
  );
};

export default HardwarePeripheralsTable;
