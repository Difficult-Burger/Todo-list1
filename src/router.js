import { createRouter, createWebHashHistory } from "vue-router";
import ListPage from './components/ListPage'
import CalendarPage from './components/CalendarPage'


const router= createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/ListPage',
            component:ListPage
        },
        {
            path:'/CalendarPage',
            component:CalendarPage
        }
    ]

});

export default router;