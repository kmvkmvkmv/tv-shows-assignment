import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import ShowCard from '../../../../src/components/shared-components/ShowCard.vue';
import VueRouter from 'vue-router'
import { routes } from '@/router/index';

describe('In Show Card Component', () => {
    let showCardWrapper;
    let router = new VueRouter({ routes });
    let propsData = {
        "id": 8484,
        "url": "http://www.tvmaze.com/shows/8484/black-panther",
        "name": "Black Panther",
        "type": "Animation",
        "language": "English",
        "genres": [
            "Action",
            "Adventure",
            "Science-Fiction"
        ],
        "status": "Ended",
        "runtime": 19,
        "premiered": "2010-01-16",
        "officialSite": null,
        "schedule": {
            "time": "",
            "days": [

            ]
        },
        "rating": {
            "average": null
        },
        "weight": 71,
        "network": {
            "id": 56,
            "name": "BET",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            }
        },
        "webChannel": null,
        "externals": {
            "tvrage": null,
            "thetvdb": 137001,
            "imdb": "tt1441105"
        },
        "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/30/75440.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/30/75440.jpg"
        },
        "summary": "<p>Deep in the heart of Africa lies Wakanda, an advanced and unconquerable civilization. A family of warrior-kings possessing superior speed, strength and agility has governed this mysterious nation as long as time itself. The latest in this famed line is young King T'Challa, the great hero known worldwide as the Black Panther (voiced by Djimon Hounsou, Blood Diamond and Gladiator). Now, outsiders once more assemble to invade and plunder Wakanda. Leading this brutal assault is Klaw, a deadly assassin with the blood of T'Challa's murdered father on his hands, who brings with him a powerful army of super-powered mercenaries. Even with Wakanda's might and his own superhuman skills, can the Black Panther prevail against this deadly invading force? Marvel Animation and BET Networks team up to create this epic animated mini-series. Black Panther features classic Marvel characters like Capta...</p>",
        "updated": 1494694802,
        "_links": {
            "self": {
                "href": "http://api.tvmaze.com/shows/8484"
            },
            "previousepisode": {
                "href": "http://api.tvmaze.com/episodes/465378"
            }
        }
    }

    beforeEach(() => {
        Vue.use(Vuetify);
        Vue.use(VueRouter);

        showCardWrapper = shallowMount(ShowCard, {
            Vue,
            router,
            propsData: {
                show: propsData
            }
        })
    });

    afterEach(() => {
        showCardWrapper.destroy();
    });

    it('is it vue instance', () => {
        expect(showCardWrapper.isVueInstance).toBeTruthy();
    })

    it('expected card stub', () => {
        const expected = '<v-card-stub';
        expect(showCardWrapper.html()).toContain(expected);
    })

    it('expected image stub', () => {
        const expected = '<v-img-stub';
        expect(showCardWrapper.html()).toContain(expected);
    })

    it('expect change of route', () => {
        showCardWrapper.vm.details(propsData.id)
        expect(showCardWrapper.vm.$route.path).toBe(`/details/${propsData.id}`)
    })

    it('expect showing of show name instead of image', () => {
        propsData.image = null
        showCardWrapper = shallowMount(ShowCard, {
            Vue,
            router,
            propsData: {
                show: propsData
            }
        });
        expect(showCardWrapper.html()).toContain(propsData.name);
    })

})