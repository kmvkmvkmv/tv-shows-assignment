import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import SummaryComponent from '../../../../src/components/details-components/SummaryComponent.vue';
import VueRouter from 'vue-router'
import { routes } from '@/router/index';

describe('In Summary Component', () => {
    let wrapper;
    let router = new VueRouter({ routes });
    let propsData = {
        "id": 123,
        "name": "Lost",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Adventure",
            "Supernatural"
        ],
        "runtime": 60,
        "rating": {
            "average": 8.4
        },
        "summary": "<p>Summary of the show</p>",
    }

    beforeEach(() => {
        Vue.use(Vuetify);
        Vue.use(VueRouter);

        wrapper = shallowMount(SummaryComponent
            , {
                Vue,
                router,
                propsData: {
                    detailedData: propsData
                }
            })
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('is it vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    })

    it('expected v-card-title stub', () => {
        const expected = '<v-card-title-stub';
        expect(wrapper.html()).toContain(expected);
    })

    it('expected v-rating stub', () => {
        const expected = '<v-rating-stub';
        expect(wrapper.html()).toContain(expected);
    })

    it('expected v-card-subtitle stub', () => {
        const expected = '<v-card-subtitle-stub';
        expect(wrapper.html()).toContain(expected);
    })

})