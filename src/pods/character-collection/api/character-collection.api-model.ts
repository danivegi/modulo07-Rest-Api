export interface CharacterEntityApi {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
}

export interface CharacterCollectionApi {
  characters: {
    results: CharacterEntityApi[];
  };
}