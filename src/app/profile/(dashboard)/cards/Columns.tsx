import { GridColDef, GridRowId} from '@mui/x-data-grid';
import { Button, TextField } from '@mui/material';

export interface ColumnData {
    id: GridRowId;
    balance: number;
    isEditing?: boolean;
}

export default (
    handleChange: (id: GridRowId, value: string) => void, 
    handleSave: (id: GridRowId, balance: number) => void, 
    handleEdit: (id: GridRowId) => void, 
    handleDelete: (id: GridRowId) => void
) => {
    const rows: GridColDef[] = [
        { field: 'id', headerName: 'Card ID', width: 90 },
        {
            field: 'balance',
            headerName: 'Balance',
            width: 150,
            renderCell: (params) => {
                const row = params.row as ColumnData;
                return row.isEditing ? (
                    <TextField 
                        size="small"
                        value={row.balance}
                        onChange={(e) => handleChange(row.id, e.target.value)}
                    />
                ) : (
                    row.balance
                );
            }
        },
        {
            field: 'edit',
            headerName: 'Edit',
            width: 100,
            renderCell: (params) => {
                const row = params.row as ColumnData;
                return row.isEditing ? (
                    <Button variant="contained" color="success" size="small" onClick={() => handleSave(row.id, row.balance)}>
                        Save
                    </Button>
                ) : (
                    <Button variant="contained" color="primary" size="small" onClick={() => handleEdit(row.id)}>
                        Edit
                    </Button>
                );
            }
        },
        {
            field: 'delete',
            headerName: 'Delete',
            width: 100,
            renderCell: (params) => (
                <Button variant="contained" color="secondary" size="small" onClick={() => handleDelete(params.row.id)}>
                    Delete
                </Button>
            )
        }
    ];
    return rows;
}