
import HelloWorld from './Components/HelloWorld.js'
import store from './Store/index.js'
const { createApp } = window.Vue;
const app = Vue.createApp({
    data(){
        return{
            message: "Hello World"
        }
    },

})

app.component('hello-world', HelloWorld);
app.use(store);
// app.config.globalProperties.$store = store;
app.mount('#app');