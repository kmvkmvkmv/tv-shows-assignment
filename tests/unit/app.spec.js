import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import App from '../../src/App.vue';
import VueRouter from 'vue-router'
import { routes } from '@/router/index';
import Vuex from 'vuex';

describe('In App View', () => {
    let wrapper;
    let router = new VueRouter({ routes });
    let actions = {
        changeshowList: jest.fn(),
        changeDataAvailability: jest.fn()
    }

    beforeEach(() => {
        Vue.use(Vuetify);
        Vue.use(VueRouter);
        Vue.use(Vuex);

        let store = new Vuex.Store({
            actions
        })

        wrapper = shallowMount(App, {
            Vue,
            router,
            store
        })
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('is it vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    })

    it('expected app bar stub', () => {
        const expected = '<v-app-stub';
        expect(wrapper.html()).toContain(expected);
    })

    it('expected content', () => {
        const expected = '<v-content-stub';
        expect(wrapper.html()).toContain(expected);
    })
})