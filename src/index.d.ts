import HelloWorld from './components/HelloWorld.vue'

declare module 'vue' {
  interface GlobalComponents {
    HelloWorld: typeof HelloWorld
  }
}
