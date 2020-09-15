import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import Theatre from '../views/home/theatre/Theatre'
import Ticket from '../views/home/ticket/Ticket'
import My from '../views/home/my/My'
import HomeList from '../views/home/homelist/HomeList'
import City from '../views/city/City'
import Detail from '../views/detail/Detail'

Vue.use(VueRouter)

  const routes = [
    {
      path : '/',
      redirect : '/home/homelist',
    },
    {
      path : '/home',
      component : Home,
      children : [
        {
          path : '/home/homelist',
          component : HomeList,
        },
        {
          path : '/home/theatre',
          component : Theatre,
        },
        {
          path : '/home/ticket',
          component : Ticket,
        },
        {
          path : '/home/my',
          component : My,
        },
      ]
    },
    {
      path : '/city',
      component : City,
    },
    {
      path : '/detail',
      component : Detail,
    }
  ]

const router = new VueRouter({
  routes
})

export default router
