import vue from 'vue'
import vueRoute from 'vue-router'



//views

import Home from '../views/Home.vue'
import Query from '../views/Query.vue'

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
    }

];

export default new vueRoute({
    mode: 'history',
    routes,
})