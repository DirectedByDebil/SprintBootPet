import './section.css';

import { Tag } from '../common/Tag';

import {Paper, Typography,
        Table, TableBody, TableCell,
        TableContainer, TableHead,
        TablePagination, TableRow
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';


export const SectionStore = ({rows, columns}) => {

  const { t } = useTranslation('sections');

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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
          value && value.length
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
      <section className='section-container'>
        <header>
          <Typography variant='h3'>
            {t('ui.store.header')}
          </Typography>
        </header>

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
                  {columns.map((column) => (
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
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover tabIndex={-1} key={row.id}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align} sx={{color:'var(--text-table)'}}>
                              {
                                createCell(value, column)
                              }
                            </TableCell>
                          );
                        })}
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
        
      </section>
    </>
  );
}