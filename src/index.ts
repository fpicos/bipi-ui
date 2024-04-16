import type { App, Plugin } from 'vue'
import './assets/styles/main.css'
import HelloWorld, { type HelloWorldProps } from './components/HelloWorld.vue'

export { HelloWorld }
export type { HelloWorldProps }

const plugin: Plugin = {
  install(app: App) {
    app.component('HelloWorld', HelloWorld)
  },
}

export default plugin
