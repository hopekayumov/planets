import {createWebHistory, createRouter} from "vue-router";

import Earth from '../Pages/Earth.vue'
import Jupiter from '../Pages/Jupiter.vue'
import Mars from '../Pages/Mars.vue'
import Mercury from '../Pages/Mercury.vue'
import Neptune from '../Pages/Neptune.vue'
import Saturne from '../Pages/Saturne.vue'
import Uranus from '../Pages/Uranus.vue'
import Venus from '../Pages/Venus.vue'


export const routes = [
    { path: '/planets-fact/earth', component: Earth },
    { path: '/planets-fact/jupiter', component: Jupiter },
    { path: '/planets-fact/mars', component: Mars },
    { path: '/planets-fact/mercury', component: Mercury },
    { path: '/planets-fact/neptune', component: Neptune },
    { path: '/planets-fact/saturne', component: Saturne },
    { path: '/planets-fact/uranus', component: Uranus },
    { path: '/planets-fact/venus', component: Venus },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
