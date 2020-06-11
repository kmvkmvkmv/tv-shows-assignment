import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Header from '../../../../src/components/shared-components/Header.vue';
import VueRouter from 'vue-router'
import { routes } from '@/router/index';
import Vuex from 'vuex'

describe('In Header Component', () => {
    let wrapper;
    let router = new VueRouter({ routes });
    let actions = {
        changeSearchQuery: jest.fn()
    }
    let event = {
        preventDefault: jest.fn()
    }

    beforeEach(() => {
        Vue.use(Vuetify);
        Vue.use(VueRouter);
        Vue.use(Vuex);

        let store = new Vuex.Store({
            actions
        })

        wrapper = shallowMount(Header, {
            Vue,
            router,
            data() {
                return ({
                    searchQuery: 'Something'
                })
            },
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
        const expected = '<v-app-bar-stub';
        expect(wrapper.html()).toContain(expected);
    })

    it('expected icon stub', () => {
        const expected = '<v-icon-stub';
        expect(wrapper.html()).toContain(expected);
    })

    it('without search query expect no route change in handleChange', () => {
        wrapper = shallowMount(Header, {
            Vue,
            router,
            data() {
                return ({
                    searchQuery: null
                })
            }
        })
        wrapper.vm.handleChange()
        expect(wrapper.vm.$route.path).toBe(`/`)
    })

    it('without search query expect no route change in submitForm', () => {
        wrapper = shallowMount(Header, {
            Vue,
            router,
            data() {
                return ({
                    searchQuery: null
                })
            }
        })
        wrapper.vm.submitForm(event);
        expect(wrapper.vm.$route.path).toBe(`/`)
    })

    it('expect change of route', () => {
        wrapper.vm.handleChange()
        expect(wrapper.vm.$route.path).toBe(`/search`)
    })

    it('expect change of route', () => {
        wrapper.vm.submitForm(event);
        expect(wrapper.vm.$route.path).toBe(`/search`)
    })

    it('expect change of route', () => {
        router.push('/')
        wrapper.vm.handleChange()
        expect(wrapper.vm.$route.path).toBe(`/search`)
    })

    it('expect change of route', () => {
        router.push('/')
        wrapper.vm.submitForm(event);
        expect(wrapper.vm.$route.path).toBe(`/search`)
    })

    it('current route = search with submit form', () => {
        router.push({ name: 'Search' })
        wrapper.vm.submitForm(event);
    })

    it('current route = search with handleChange', () => {
        router.push({ name: 'Search' })
        wrapper.vm.handleChange();
    })

})