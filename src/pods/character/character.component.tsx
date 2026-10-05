import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { TextFieldComponent } from '#common/components';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onBack: () => void;
  onSaveBestSentence: (bestSentence: string) => Promise<void>;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onBack, onSaveBestSentence } = props;

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
        <CardContent className={classes.content}>
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
          {character.bestSentence && (
            <Typography>
              <strong>Mejor frase:</strong> “{character.bestSentence}”
            </Typography>
          )}

          <Formik
            initialValues={{ bestSentence: character.bestSentence }}
            onSubmit={(values) => onSaveBestSentence(values.bestSentence)}
          >
            {({ isSubmitting }) => (
              <Form>
                <TextFieldComponent
                  name="bestSentence"
                  label="Mejor frase"
                  multiline
                  rows={2}
                />
                <Button type="submit" variant="contained" disabled={isSubmitting}>
                  Guardar
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};