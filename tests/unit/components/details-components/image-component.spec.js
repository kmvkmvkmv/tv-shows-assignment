import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import ImageComponent from '../../../../src/components/details-components/ImageComponent.vue';
import VueRouter from 'vue-router'
import { routes } from '@/router/index';

describe('In Image Component', () => {
    let wrapper;
    let router = new VueRouter({ routes });
    let propsData = {
        "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/30/75440.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/30/75440.jpg"
    }

    beforeEach(() => {
        Vue.use(Vuetify);
        Vue.use(VueRouter);

        wrapper = shallowMount(ImageComponent, {
            Vue,
            router,
            propsData: {
                imageUrlProp: propsData
            }
        })
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('is it vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    })

    it('expected image stub', () => {
        const expected = '<v-img-stub';
        expect(wrapper.html()).toContain(expected);
    })

    it('without image url', () => {
        wrapper = shallowMount(ImageComponent, {
            Vue,
            router,
            propsData: {
                imageUrlProp: null
            }
        })

    })
})