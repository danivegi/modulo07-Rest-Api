import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onBack: () => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onBack } = props;

  return (
    <div className={classes.root}>
      <Button variant="outlined" onClick={onBack}>
        Volver
      </Button>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
          className={classes.image}
        />
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            {character.name}
          </Typography>
          <Typography><strong>Estado:</strong> {character.status}</Typography>
          <Typography><strong>Especie:</strong> {character.species}</Typography>
          {character.type && (
            <Typography><strong>Tipo:</strong> {character.type}</Typography>
          )}
          <Typography><strong>Género:</strong> {character.gender}</Typography>
          <Typography><strong>Origen:</strong> {character.origin}</Typography>
          <Typography><strong>Ubicación:</strong> {character.location}</Typography>
          <Typography><strong>Episodios:</strong> {character.episodeCount}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};