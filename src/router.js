import vueRouter from "vue-router"
import Checkin from "./components/CheckIn"

const router = new vueRouter ({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/checkin',
            name: 'checkin',
            component: Checkin
        },
    ]
})

export default router