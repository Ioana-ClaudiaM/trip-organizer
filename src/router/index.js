import { createRouter, createWebHistory } from 'vue-router';
import Destinations from '../pages/Destinations.vue'; 
import HomePage from '@/pages/HomePage.vue';
import Wishlist from '@/pages/Wishlist.vue';
import Contact from '@/pages/Contact.vue';
import Profile from '@/pages/Profile.vue';

const routes = [
  {
    path: '/destinations',
    name: 'Destinations',
    component: Destinations, 
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage, 
  },
  {
    path: '/wishlist',
    name: 'WishlistPage',
    component: Wishlist, 
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: Contact,
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: Profile, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
