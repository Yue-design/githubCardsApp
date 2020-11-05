import React, { useState } from "react";
import Table from "./pages/table";
import DynamicTable from "./pages/dynamicTable";
import DynamicTableV1 from "./pages/dynamicTable_v1";
import "./App.css";

function App() {
  return (
    <div>
      <Table />
      <DynamicTableV1 />
      <DynamicTable />
    </div>
  );
}

export default App;
