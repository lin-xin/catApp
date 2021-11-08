import { createApp } from 'vue'
import { Button, Toast,Tabbar,TabbarItem,Icon,Avatar,Input  } from '@nutui/nutui-taro';
import '@nutui/nutui-taro/dist/style.css';

import './app.scss'

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(Button).use(Toast).use(Tabbar).use(TabbarItem).use(Icon).use(Avatar).use(Input)

export default App
