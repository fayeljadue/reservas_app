import vueRouter from "vue-router"
import Checkin from "./components/CheckIn"
import VerReservas from "./components/VerReservas"

const router = new vueRouter ({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/checkin',
            name: 'checkin',
            component: Checkin
        },
        {
            path: '/verreservas',
            name: 'verreservas',
            component: VerReservas
        },
    ]
})

export default router