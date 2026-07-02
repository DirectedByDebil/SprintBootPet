import { Tag } from '../common/Tag';

import {Paper,
        Table, TableBody, TableCell,
        TableContainer, TableHead,
        TablePagination, TableRow,
        IconButton
} from '@mui/material';

import { Edit, Delete } from '@mui/icons-material';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

//todo: row actions:
//todo on edit clicked => open prop.editModal
//todo on delete clicked => open locked prop.editModa, accept or decline deleting

//todo: header actions:
//todo add multiple selection
//todo add export selected items to csv/pdf
//todo add create button => open prop.createModal

export const TableCrud = ({
  rows,
  columns,
  onEdit=()=>{},
  onDelete=()=>{}
}) => {

  const { t } = useTranslation('pages');

  const [page, setPage] = useState(0);
  //todo use pagination size from local storage
  const [rowsPerPage, setRowsPerPage] = useState(5);

  //todo add i18n
  const actionColumn = {
    id: 'actions',
    label: t('ui.pages.store.columns.actions'),
    style: {
      minWidth: 30
    },
    align: 'left',
    component: 'text'
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function createCell(value, column) {

    if (!value || !column || !column.component) {
      return value || "---";
    }

    switch(column.component) {

      case "text":
        return (
          column && column.format && typeof value === 'number'
          ? column.format(value)
          : value
        );

      case "img":
        return (
          <img src={value} alt=""/>
        );

      case "tags":
        return (
          value && value.length && value.map
          ? value.map((item) => {
            return (
              <Tag item={item}/>
            );
          })
          : (
            <Tag item={value} />
          )
        );

      default:
        return "---";
    }
  }

  return (
    <>
      <Paper sx={{ 
        width: '100%', 
        overflow: 'hidden',
        marginTop: '24px'
      }}>

        <TableContainer sx={{
          bgcolor: 'var(--bg-table)',
          color: 'var(--text-table)'
        }}>
          <Table stickyHeader aria-label="sticky table">

            <TableHead>
              <TableRow>
                {
                  columns.map((column) => (
                    <TableCell sx={{
                      bgcolor: 'var(--bg-table-header)',
                      color: 'var(--text-table)'
                    }}
                      key={column.id}
                      align={column.align}
                      style={column.style}
                    >
                      {column.label}
                    </TableCell>
                  ))
                }
                <TableCell
                  key={actionColumn.id}
                  align={actionColumn.align}
                  style={actionColumn.style}
                  sx={{
                      bgcolor: 'var(--bg-table-header)',
                      color: 'var(--text-table)'
                    }}>
                    {actionColumn.label}
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover tabIndex={-1} key={row.id}>
                      {
                        columns.map((column) => {
                          const value = column.useSelf ? row : row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align} sx={{color:'var(--text-table)'}}>
                              {
                                createCell(value, column)
                              }
                            </TableCell>
                          );
                        })
                      }
                      <TableCell>
                        <IconButton
                          sx={{color:'var(--text-table)'}}
                          onClick={onEdit.bind(this, row)}>
                        
                          <Edit />
                        </IconButton>
                        
                        <IconButton 
                          sx={{color:'var(--text-table)'}}
                          onClick={onDelete.bind(this, row)}>

                          <Delete />
                        </IconButton>

                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          sx={{
            bgcolor: 'var(--bg-table-pagination)',
            color: 'var(--text-table)'
          }}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}