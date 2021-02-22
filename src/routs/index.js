import vue from 'vue'
import vueRoute from 'vue-router'



//views

import Home from '../views/Home.vue'
import Query from '../views/Query.vue'
import Find from '../views/Find.vue'

vue.use(vueRoute)


const routes =   [
    {
        path: '/',
        component: Home
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/query',
        component: Query
    },
    {
        path: '/find',
        component: Find
    }

];

export default new vueRoute({
    mode: 'history',
    routes,
})