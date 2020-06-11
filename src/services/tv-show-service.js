import clientApi from './client-api';
import { allShowsApiUrl, showByNameApiUrl, showByIdApiUrl } from '../shared/app-constants';

export const getAllShows = () => clientApi.get(`${allShowsApiUrl}`);
export const getShowByName = (name) => clientApi.get(`${showByNameApiUrl}${name}`)
export const getShowById = (id) => clientApi.get(`${showByIdApiUrl}${id}?embed=cast`)