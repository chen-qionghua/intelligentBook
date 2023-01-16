import { RouteRecordRaw } from 'vue-router'
import { First } from '../components/welcom/first';
import { Sencond } from '../components/welcom/sencond';
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