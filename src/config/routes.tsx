import { RouteRecordRaw } from 'vue-router'
import { First } from '../components/welcome/Frist';
import { Sencond } from '../components/welcome/Sencond';
import { Welcome } from '../views/Welcome';

export const routes:RouteRecordRaw[] = [
  {path:'/',redirect:'/welcome'},
  {path:'/welcome',component:Welcome,children:[
    {path:'',redirect:'/welcome/1'},
    {path:'1',component:First},
    {path:'2',component:Sencond}
  ]}
]