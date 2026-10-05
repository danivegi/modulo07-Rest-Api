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
import { EpisodeEntityVm } from './episode-collection.vm';
import * as classes from './episode-collection.styles';

interface Props {
  episodeCollection: EpisodeEntityVm[];
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const EpisodeCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { episodeCollection, page, totalPages, onPageChange } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1">
        Episodios
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Código</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Fecha de emisión</TableCell>
              <TableCell align="right">Personajes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {episodeCollection.map((episode) => (
              <TableRow key={episode.id}>
                <TableCell>{episode.code}</TableCell>
                <TableCell>{episode.name}</TableCell>
                <TableCell>{episode.airDate}</TableCell>
                <TableCell align="right">{episode.characterCount}</TableCell>
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