import { RouteRecordRaw } from 'vue-router'
import { First } from '../components/welcome/Frist';
import { Sencond } from '../components/welcome/Sencond';
import { Bar } from "../views/Bar";
import { Foo } from "../views/Foo";
import { Welcome } from '../views/Welcome';

export const routes:RouteRecordRaw[] = [
  {path:'/',component:Foo},
  {path:'/about',component:Bar},
  {path:'/welcome',component:Welcome,children:[
    {path:'1',component:First},
    {path:'2',component:Sencond}
  ]}
]