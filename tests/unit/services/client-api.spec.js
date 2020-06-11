import axios from 'axios';
import clientApi from '../../../src/services/client-api';

jest.mock('../../../src/services/client-api');

describe('In clientApi', () => {
    const baseURL = 'https://api.tvmaze.com';

    it('clientApi to be defined', () => {
        expect(clientApi).toBeDefined();
    });

    it('axios.create sets the baseUrl', () => {
        const expected = axios.create({
            baseURL,
        });
        expect(clientApi.baseURL).toEqual(expected.baseURL);
    });
});
