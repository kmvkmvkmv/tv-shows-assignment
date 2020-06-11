import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Footer from '../../../../src/components/shared-components/Footer.vue';
import VueRouter from 'vue-router'

describe('In Footer Component', () => {
    let footerWrapper;
    beforeEach(() => {
        Vue.use(Vuetify);
        Vue.use(VueRouter);

        footerWrapper = shallowMount(Footer, {
            Vue
        })
    });

    afterEach(() => {
        footerWrapper.destroy();
    });

    it('is it vue instance', () => {
        expect(footerWrapper.isVueInstance).toBeTruthy();
    })

    it('expected v-footer stub', () => {
        const expected = '<v-footer-stub';
        expect(footerWrapper.html()).toContain(expected);
    })
})