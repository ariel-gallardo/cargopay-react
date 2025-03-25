"use client";

import { PageContainer } from "@toolpad/core";
import { useState } from "react";
import { DataGrid, GridColDef, GridPaginationModel, GridRowId } from "@mui/x-data-grid";
import { ColumnData } from "./Columns";
import Columns from "./Columns";

export default () => {
  const [rows, setRows] = useState<ColumnData[]>(
    Array.from({ length: 30 }, (_, index) => ({
      id: Number(String(Date.now()) + String(index).padStart(3, "0")),
      balance: (index + 1) * 100,
    }))
  );

  const handleEdit = (id: GridRowId) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, isEditing: true } : row))
    );
  };

  const handleSave = (id: GridRowId, newBalance: number) => {
    setRows(
      rows.map((row) =>
        row.id === id ? { ...row, balance: newBalance, isEditing: false } : row
      )
    );
  };

  const handleDelete = (id: GridRowId) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleChange = (id: GridRowId, value: string) => {
    setRows(
      rows.map((row) =>
        row.id === id ? { ...row, balance: Number(value) } : row
      )
    );
  };
  

  const [paginationModel, setPaginationModel] = useState({
    page: 1,
    pageSize: 10
  });

  const handlePaginationChange = (newPaginationModel: GridPaginationModel) => {
    setPaginationModel(newPaginationModel);
  };

  return (
    <PageContainer className="w-full">
      <DataGrid
      className="w-full"
        columns={Columns(handleChange, handleSave, handleEdit, handleDelete)}
        rows={rows}
        onPaginationModelChange={handlePaginationChange}
        paginationModel={paginationModel}
        pageSizeOptions={[5, 10, 15]}
      />
    </PageContainer>
  );
};
