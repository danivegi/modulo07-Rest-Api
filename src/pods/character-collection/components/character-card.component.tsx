import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { CharacterEntityVm } from '../character-collection.vm';

interface Props {
  character: CharacterEntityVm;
  onSelect: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onSelect } = props;

  return (
    <Card>
      <CardActionArea onClick={() => onSelect(character.id)}>
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
        />
        <CardHeader
          title={character.name}
          subheader={`${character.species} · ${character.status}`}
        />
      </CardActionArea>
    </Card>
  );
};