import vue from 'vue'
import vueRoute from 'vue-router'

vue.use(vueRoute)

const routes =   [
    {
        path: '/',
        component: ()=> import('../views/Home.vue'),
        meta: {layout: 'defaultLayut'}
    },
    {
        path: '/home',
        redirect: '/',
        meta: {layout: 'defaultLayut'}
    },
    {
        path: '/query',
        component: ()=> import('../views/Query.vue'),
        meta: {layout: 'defaultLayut'}
    },
    {
        path: '/find/:id',
        component: ()=> import('../views/Find.vue'),
        meta: {layout: 'defaultLayut'},
        name: 'find.id'
    }

]

export default new vueRoute({
    mode: 'history',
    routes,
})