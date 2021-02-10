import Tariff from '../Pages/Tariff/view/Tariff'
import KarudaHome from '../Pages/KarudaHome/view/KarudaHome'
import KarudaAbout from '../Pages/karudaAbout/view/KarudaAbout'
import KarudaCheckBooking from '../Pages/KarudaCheckBooking/view/KarudaCheckBooking'
import KarudaCar from '../Pages/KarudaCar/view/KarudaCar'

export default [
    {
        path: '/',
        component: KarudaHome,
        exact: true
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
        component: KarudaHome
    },
    {
        path: '/KarudaCheckBooking',
        component: KarudaCheckBooking
    },

]