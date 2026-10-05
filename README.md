# Laboratorio Módulo 7 - REST API

Aplicación en React que consume la API de [Rick & Morty](https://rickandmortyapi.com/).

## Cómo arrancarlo

```bash
npm install
npm start
```

La app se abre en `http://localhost:8080`. El servidor mock local arranca a la vez en `http://localhost:3000`.

## Ramas

Cada ejercicio está en su propia rama, porque son versiones alternativas de la misma app:

| Rama | Contenido |
|---|---|
| `feature/ejercicio-1` | Ejercicio 1: listado y detalle de personajes con la API REST real (axios) |
| `feature/ejercicio-2` | Ejercicio 2: endpoints apuntando al servidor local y edición de `bestSentence` (PUT) |
| `feature/opcional-graphql` | Opcional: el Ejercicio 1 implementado con la API GraphQL |
| `feature/challenges` | Challenges: paginación, búsqueda de personajes y secciones de lugares y episodios |

`main` contiene la versión más completa: el Ejercicio 1 más todos los challenges.