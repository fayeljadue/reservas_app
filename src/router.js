import vueRouter from "vue-router"
import Checkin from "./components/CheckIn"

const router = new vueRouter ({
    routes: [
        {
            path: '/checkin',
            name: 'checkin',
            component: Checkin
        },
    ]
})

export default router