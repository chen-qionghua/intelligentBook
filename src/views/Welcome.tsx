import { defineComponent } from "vue";
import { RouterView } from 'vue-router'
import logo from '../assets/icons/mangosteen.svg'
import s from './Welcome.module.scss'
export const Welcome = defineComponent({
  setup:(props,context)=>{
    return ()=><div class={s.wrapper}>
      <header>
        <img src={logo}/>
        <h1>智账本</h1>
      </header>
        <main class={s.main}><RouterView /></main>
    </div>
  }
})