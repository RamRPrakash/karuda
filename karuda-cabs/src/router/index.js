import Tariff from '../Pages/Tariff/view/Tariff'
import KarudaHome from '../Pages/KarudaHome/view/KarudaHome'
import KarudaAbout from '../Pages/karudaAbout/view/KarudaAbout'
import KarudaCheckBooking from '../Pages/KarudaCheckBooking/view/KarudaCheckBooking'
import KarudaCar from '../Pages/KarudaCar/view/KarudaCar'
import Home from '../Pages/Home/view/Home'
import OnlineBooking from '../Pages/KarudaOnlineBooking/view/KarudaOnlineBooking'
import Login from '../Pages/Login/Login'
import EntryChart from '../Pages/EntryChart/EntryChart'
import NewHome from '../Pages/NewHome/view/NewHome'

export default [
    {
        path: '/',
        component: NewHome,
        exact: true
    },
    {
        path: '/Home',
        component: Home
    },
    {
        path: '/Tariff',
        component: Tariff
    },
    {
        path: '/KarudaHome',
        component: KarudaHome
    },
    {
        path: '/KarudaAbout',
        component: KarudaAbout
    },
    {
        path: '/KarudaCar',
        component: KarudaCar
    },
    {
        path: '/KarudaOnlineBooking',
        component: OnlineBooking
    },
    {
        path: '/KarudaCheckBooking',
        component: KarudaCheckBooking
    },
    {
        path: '/Login',
        component: Login
    },
    {
        path: '/EntryChart',
        component: EntryChart
    },
    {
        path: '/NewHome',
        component: NewHome
    },

]