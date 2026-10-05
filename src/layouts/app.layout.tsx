import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { linkRoutes } from '#core/router';
import * as classes from './app.layout.styles';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Button
            color="inherit"
            component={RouterLink}
            to={linkRoutes.characterCollection}
          >
            Personajes
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to={linkRoutes.locationCollection}
          >
            Lugares
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};