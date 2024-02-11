"use client";

import { Trip } from "@/models/trip";
import { ColDef, ICellRendererParams } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

type Props = {
  trips: Trip[];
};

export default function TripGrid({ trips }: Props) {
  // Column Definitions: Defines & controls grid columns.
  const colDefs: ColDef[] = [
    {
      field: "id",
    },
    {
      field: "startDate",
    },
    {
      field: "riverName",
    },
    {
      field: "startName",
    },
    {
      field: "distanceMiles",
    },
    {
      field: "timeMinutes",
    },
    {
      field: "notes",
    },
  ];

  return (
    <div className="ag-theme-quartz" style={{ height: "90vh", padding: 20 }}>
      <AgGridReact rowData={trips} columnDefs={colDefs} />
    </div>
  );
}
