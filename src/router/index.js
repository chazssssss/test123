import VueRouter from "vue-router"
import Vue from "vue"


Vue.use(VueRouter)
const routes = [
    {
      path: '/',
      name: 'user-login',
      component: ()=>import('../views/Login'),
    },
    {
        path: '/init-regPage',
        name: 'init-regPage',
        component: ()=>import('../views/init'),
    },
    {
        path: '/home',
        name: 'admin',
        component: ()=>import('../views/User'),
        children:[
            {
                path: "/room",
                component: ()=>import("../views/room/index")
            },
            {
                path: "/forest",
                component: ()=>import("../views/forests/index")
            },
            {
                path: "/deploy-mods",
                component: ()=>import("../views/mod/deploy")
            },
            {
                path: "/mods-setting",
                component: ()=>import("../views/mod/SetMods")
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router 