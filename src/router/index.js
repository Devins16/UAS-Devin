import { createRouter, createWebHistory } from 'vue-router';

import cuaca from '../components/cuaca.vue';
import lokasi from '../components/lokasi.vue';
import stopwatch from '../components/stopwatch.vue';
import game from '../components/game.vue';
import photo from '../components/photo.vue';

const routes = [
  { path: '/', component: cuaca },
  { path: '/lokasi', component: lokasi },
  { path: '/stopwatch', component: stopwatch },
  { path: '/game', component: game },
  { path: '/photo', component: photo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;