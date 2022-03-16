import { createWebHistory, createRouter } from 'vue-router';
import List from '../components/List.vue';
import RoundList from '../components/RoundLists.vue';
import regis_form from '../components/regist-form.vue';
import Lists_admin from '../components/lists-admin.vue';
import ReserveBtn from '../components/ReserveBtn.vue';
import CancelBtn from '../components/CanceldBtn.vue';
import CovidBtn from '../components/CovidBtn.vue';
const routes = [
  {
    path: "/",
    name: "RoundList",
    component: RoundList,
  },
  {
    path: "/List",
    name: "List",
    component: List,
  },
  {
      path: "/regis-form",
      name: "regis_form",
      component: regis_form
  },
  {
      path: "/Lists-admin",
      name: "Lists-admin",
      component: Lists_admin
  },
  {
    path: "/ReserveBtn",
    name: "ReserveBtn",
    component: ReserveBtn
},
{
    path: "/CancelBtn",
    name: "CancelBtn",
    component: CancelBtn
},
{
    path: "/CovidBtn",
    name: "CovidBtn",
    component: CovidBtn
}
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;