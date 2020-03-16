import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard'
import Profile from '@/components/Profile'
import Tables from '@/components/Tables'
import Maps from '@/components/Maps'
import DashboardNew from '@/components/DashboardNew'
import BadGateway from '@/components/BadGateway'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      props: { page: 1 },
      alias: '/'
    },
    {
      path: '/dashboardNew',
      name: 'DashboardNew',
      component: DashboardNew,
      props: { page: 2 },
      alias: '/'
    },
    {
      path: '/profile',
      name: 'Profile',
      props: { page: 3 },
      component: Profile
    },
    {
      path: '/tables',
      name: 'Tables',
      props: { page: 4 },
      component: Tables
    },
    {
      path: '/maps',
      name: 'Maps',
      props: { page: 5 },
      component: Maps
    },
    {
      path: '/404',
      name: 'BadGateway',
      props: { page: 6 },
      component: BadGateway
    },
    {
      path: '*',
      props: { page: 6 },
      redirect: '/404'
    }
  ]
})