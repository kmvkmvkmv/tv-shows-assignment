import Vue from "vue";
import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import CarouselItem from '../../../../src/components/home-components/CarouselItem.vue';
import VueRouter from 'vue-router'
import { routes } from '@/router/index';

describe('In Carousel Item Component', () => {
    let carouselItemWrapper;
    const router = new VueRouter(routes);
    beforeEach(() => {
        Vue.use(Vuetify);
        Vue.use(VueRouter);

        carouselItemWrapper = shallowMount(CarouselItem, {
            Vue,
            router,
            propsData: {
                show: {
                    "id": 8484,
                    "name": "Black Panther",
                    "genres": [
                        "Action",
                        "Adventure",
                        "Science-Fiction"
                    ],
                    "rating": {
                        "average": null
                    },
                    "image": {
                        "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/30/75440.jpg",
                        "original": "http://static.tvmaze.com/uploads/images/original_untouched/30/75440.jpg"
                    },
                    "summary": "<p>Deep in the heart of Africa lies Wakanda, an advanced and unconquerable civilization. A family of warrior-kings possessing superior speed, strength and agility has governed this mysterious nation as long as time itself. The latest in this famed line is young King T'Challa, the great hero known worldwide as the Black Panther (voiced by Djimon Hounsou, Blood Diamond and Gladiator). Now, outsiders once more assemble to invade and plunder Wakanda. Leading this brutal assault is Klaw, a deadly assassin with the blood of T'Challa's murdered father on his hands, who brings with him a powerful army of super-powered mercenaries. Even with Wakanda's might and his own superhuman skills, can the Black Panther prevail against this deadly invading force? Marvel Animation and BET Networks team up to create this epic animated mini-series. Black Panther features classic Marvel characters like Capta...</p>",
                }
            }
        })
    });

    afterEach(() => {
        carouselItemWrapper.destroy();
    });

    it('is it vue instance', () => {
        expect(carouselItemWrapper.isVueInstance).toBeTruthy();
    })

    it('expected image stub', () => {
        const expected = '<v-img-stub';
        expect(carouselItemWrapper.html()).toContain(expected);
    })

    it("it should navigate to details", () => {
        carouselItemWrapper.vm.details(123);
        expect(carouselItemWrapper.vm.$route.path).toBe("/details/123");
    });

})