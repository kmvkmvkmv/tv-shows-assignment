import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Home from '../../../src/views/Home.vue';
import VueRouter from 'vue-router'
import { routes } from '@/router/index';

describe('In Home View', () => {
    let wrapper;

    beforeEach(() => {
        Vue.use(Vuetify);

        wrapper = shallowMount(Home
            , {
                Vue
            })
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('is it vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    })

    it('expected homepage-carousel stub', () => {
        const expected = '<homepage-carousel-stub';
        expect(wrapper.html()).toContain(expected);
    })

    it('expected categorywise-list stub', () => {
        const expected = '<categorywise-list-stub';
        expect(wrapper.html()).toContain(expected);
    })
})