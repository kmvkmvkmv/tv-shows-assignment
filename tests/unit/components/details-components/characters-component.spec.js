import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import CharactersComponent from '../../../../src/components/details-components/CharactersComponent.vue';
import VueRouter from 'vue-router'
import { routes } from '@/router/index';

describe('In Characters Component', () => {
    let wrapper;
    let router = new VueRouter({ routes });
    let propsData = [
        {
            "person": {
                "id": 26406,
                "name": "Matthew Fox",
                "country": {
                    "name": "United States"
                },
                "image": {
                    "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/2384.jpg",
                    "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/2384.jpg"
                }
            },
            "character": {
                "id": 34808,
                "name": "Dr. Jack Shephard",
                "image": {
                    "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1390.jpg",
                    "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1390.jpg"
                }
            }
        }
    ]

    beforeEach(() => {
        Vue.use(Vuetify);
        Vue.use(VueRouter);

        wrapper = shallowMount(CharactersComponent, {
            Vue,
            router,
            propsData: {
                casts: propsData
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

    it('expected image stub', () => {
        const expected = '<v-img-stub';
        expect(wrapper.html()).toContain(expected);
    })

    it('expected v-list-item-subtitle stub', () => {
        const expected = '<v-list-item-subtitle-stub';
        expect(wrapper.html()).toContain(expected);
    })

    it('expected v-list-item-avatar stub', () => {
        const expected = '<v-list-item-avatar';
        expect(wrapper.html()).toContain(expected);
    })

})