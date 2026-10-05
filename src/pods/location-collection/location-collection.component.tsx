import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import { LocationEntityVm } from './location-collection.vm';
import * as classes from './location-collection.styles';

interface Props {
  locationCollection: LocationEntityVm[];
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const LocationCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { locationCollection, page, totalPages, onPageChange } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1">
        Lugares
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Dimensión</TableCell>
              <TableCell align="right">Residentes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {locationCollection.map((location) => (
              <TableRow key={location.id}>
                <TableCell>{location.name}</TableCell>
                <TableCell>{location.type}</TableCell>
                <TableCell>{location.dimension}</TableCell>
                <TableCell align="right">{location.residentCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {totalPages > 1 && (
        <div className={classes.pagination}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, value) => onPageChange(value)}
            color="primary"
          />
        </div>
      )}
    </div>
  );
};