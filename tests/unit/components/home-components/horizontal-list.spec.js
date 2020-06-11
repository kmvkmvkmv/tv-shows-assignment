import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import HorizontalList from '../../../../src/components/home-components/HorizontalList.vue';
import VueRouter from 'vue-router'
import { routes } from '@/router/index';

describe('In Horizontal List Component', () => {
    let wrapper;
    let router = new VueRouter({ routes });
    let genre = [{ "genre": 1 }]
    let genreName = 'Name'

    beforeEach(() => {
        Vue.use(Vuetify);
        Vue.use(VueRouter);

        wrapper = shallowMount(HorizontalList
            , {
                Vue,
                router,
                propsData: {
                    genre,
                    genreName
                }
            })
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('is it vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    })

    it('expected v-slide-group stub', () => {
        const expected = '<v-slide-group-stub';
        expect(wrapper.html()).toContain(expected);
    })

    it('expected v-slide-item stub', () => {
        const expected = '<v-slide-item-stub';
        expect(wrapper.html()).toContain(expected);
    })

    it('expected show-card stub', () => {
        const expected = '<show-card-stub';
        expect(wrapper.html()).toContain(expected);
    })

})