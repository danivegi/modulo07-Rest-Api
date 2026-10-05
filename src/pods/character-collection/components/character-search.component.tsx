import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as classes from './character-search.styles';

interface Props {
  initialName: string;
  onSearch: (name: string) => void;
}

export const CharacterSearch: React.FunctionComponent<Props> = (props) => {
  const { initialName, onSearch } = props;
  const [name, setName] = React.useState(initialName);

  React.useEffect(() => {
    setName(initialName);
  }, [initialName]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(name.trim());
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
        label="Buscar personaje"
        value={name}
        onChange={(event) => setName(event.target.value)}
        size="small"
        fullWidth
      />
      <Button type="submit" variant="contained">
        Buscar
      </Button>
    </form>
  );
};