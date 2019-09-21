const Index = () => import(/* webpackChunkName: "group-Index" */'./components/Index.vue')
const NewsDes = () => import(/* webpackChunkName: "group-NewsDes" */'./components/NewsDes.vue')
const routes = [
    { path: '/', component: Index },
    { path: '/news', component: NewsDes }
]
export default routes;