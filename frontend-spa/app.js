import Dashboard from './components/Dashboard.js';
import Katalog from './components/Katalog.js';
import Login from './components/Login.js';

const routes = [
    { path: '/', component: Dashboard, name: 'Dashboard', meta: { requiresAuth: true } },
    { path: '/katalog', component: Katalog, name: 'Katalog Buku', meta: { requiresAuth: true } },
    { path: '/login', component: Login, name: 'Login' }
];

const router = VueRouter.createRouter({ 
    history: VueRouter.createWebHashHistory(), 
    routes 
});

router.beforeEach((to, from, next) => {
    const isAuth = localStorage.getItem('token');
    if (to.meta.requiresAuth && !isAuth) next('/login');
    else if (to.path === '/login' && isAuth) next('/');
    else next();
});

const app = Vue.createApp({
    methods: {
        logout() {
            localStorage.removeItem('token');
            this.$router.push('/login');
        }
    }
});

app.use(router);
app.mount('#app');
