import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Details from '../../../src/views/Details.vue';
import VueRouter from 'vue-router'
import { routes } from '@/router/index';
import clientApi from '../../../src/services/client-api';

jest.mock('../../../src/services/client-api');

describe('In Details View', () => {
    let wrapper;
    let router = new VueRouter({ routes });
    let data = {
        "id": 123,
        "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1389.jpg"
        },
        "_embedded": {
            "cast": [
                {
                    "person": {
                        "id": 26406,
                    }
                },
            ]
        }
    }
    beforeEach(() => {
        Vue.use(Vuetify);
        Vue.use(VueRouter);

        wrapper = shallowMount(Details, {
            Vue,
            router,
            data() {
                return ({
                    detailedData: data
                })
            }
        })

        const response = data;
        clientApi.get.mockResolvedValue(response);
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('is it vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    })

    it('expected v-container stub', () => {
        const expected = '<v-container-stub';
        expect(wrapper.html()).toContain(expected);
    })

    it('expected v-row stub', () => {
        const expected = '<v-row-stub';
        expect(wrapper.html()).toContain(expected);
    })

    it('without data', () => {
        const expected = '<v-row-stub';
        wrapper = shallowMount(Details, {
            Vue,
            router,
            data() {
                return ({
                    detailedData: {}
                })
            },
            computed: {
                id() {
                    return 1;
                }
            }
        })
        expect(wrapper.html()).not.toContain(expected);
    })
})