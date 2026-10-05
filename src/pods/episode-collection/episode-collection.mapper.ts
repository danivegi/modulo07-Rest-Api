import * as apiModel from './api/episode-collection.api-model';
import * as viewModel from './episode-collection.vm';

export const mapFromApiToVm = (
  episode: apiModel.EpisodeEntityApi
): viewModel.EpisodeEntityVm => ({
  id: episode.id.toString(),
  code: episode.episode,
  name: episode.name,
  airDate: episode.air_date,
  characterCount: episode.characters.length,
});