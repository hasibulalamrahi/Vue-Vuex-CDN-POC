const { defineComponent,computed} = window.Vue;
// import AppStore from '../Store/index'
const HelloWorld = defineComponent({
    props: {
      message: String,
    },
    data() {
      return {
        count: 0,
      };
    },
    computed: {
        getCountFromStore() {
          return this.$store.getters.getCount;
        },
    },
    methods: {
      increment() {
        console.log("increment")
        this.count++;
      },
      incrementFromStore({commit}){
        console.log("from store")
        this.$store.commit('increment')
      }
    },
    template: `
      <div>
        <p>{{ message }}</p>
        <p>Count: {{ count }}</p>
        <p> Count from Store: {{getCountFromStore}} </p>
        <button @click="increment">Increment</button>
        <button @click="incrementFromStore">Increment From Store</button>
      </div>
    `,
  });
  

  export default HelloWorld;