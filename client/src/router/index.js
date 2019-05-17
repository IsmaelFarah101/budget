import Router from 'vue-router'
import Metric from '../components/Metric'
import Main from '../components/Main'
export default new Router({
    routes:[
    {
        //this is the first page users will see when loaded
        path:'/',
        //this is the component
        component:Main
    },
    {
        //this is the page users will be transitioned to when they click a specific link
        path:'/metrics',
        component: Metric
    },
    ]
})