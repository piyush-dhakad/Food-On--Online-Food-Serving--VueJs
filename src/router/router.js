import { createWebHistory, createRouter } from 'vue-router';
import Customer from '../components/Customer-page.vue'
import MainSection from '../components/Main-section.vue';
import Recipes from '../components/Recipes-page.vue'
import PostComponent from '../components/Post-component.vue'
import ProductsPage from '../components/Products-page.vue'

const routes = [
	{
		path: '/',
		name: 'mainsection',
		component: MainSection,
	},
    {
		path: '/customer',
		name: 'customer',
		component: Customer,
	},
    {
		path: '/recipes',
		name: 'recipes',
		component: Recipes,
	},
    {
		path: '/apps',
		name: 'Apps',
		component: PostComponent,
	},
	{
		path: '/apps',
		name: 'apps',
		component: MainSection,
	},{
		path: '/products',
		name: 'products',
		component: ProductsPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;