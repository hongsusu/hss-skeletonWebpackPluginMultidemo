import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloWorld'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/page1',
            name: 'Page1',
            component: Page1
        },
      {
        path: '/page2',
        name: 'Page2',
        component: Page2
      }
    ]
})
