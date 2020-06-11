import { getAllShows, getShowByName, getShowById } from '../../../src/services/tv-show-service';
import clientApi from '../../../src/services/client-api';

jest.mock('../../../src/services/client-api');

describe('In tv show service, ', () => {
    it('getAllShows api should call', () => {
        const response = 'response';
        clientApi.get.mockResolvedValue(response);
        getAllShows().then(((result) => {
            expect(result).toEqual(response);
        }));
    });

    it('getShowById api should call', () => {
        const response = 'response';
        clientApi.get.mockResolvedValue(response);
        getShowById().then(((result) => {
            expect(result).toEqual(response);
        }));
    });

    it('getShowByName api should call', () => {
        const response = 'response';
        clientApi.get.mockResolvedValue(response);
        getShowByName().then(((result) => {
            expect(result).toEqual(response);
        }));
    });
});
