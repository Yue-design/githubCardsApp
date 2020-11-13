import React, { useState } from "react";
import Table from "./pages/table";
import DynamicTable from "./pages/dynamicTable";
import DynamicTableV1 from "./pages/dynamicTable_v1";
import TableGenerator from "./pages/tableGenerator";
import "./App.css";

function App() {
  return (
    <div>
      <TableGenerator />
    </div>
  );
}

export default App;
