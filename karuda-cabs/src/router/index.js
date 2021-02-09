
import Home from '../Pages/Home/view/Home'
import Tariff from '../Pages/Tariff/view/Tariff'
import KarudaHome from '../Pages/KarudaHome/view/KarudaHome'
import KarudaAbout from '../Pages/karudaAbout/view/KarudaAbout'

export default [
    {
        path: '/',
        component: KarudaHome,
        exact: true
    },
    {
        path: '/SignUp',
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

]