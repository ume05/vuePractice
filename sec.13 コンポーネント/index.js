const countComponent = {
  data() {
    return {
      count: 0
    }
  },
  template: '<p>count:<button @click="countup">{{count}}</button></p>',
  methods: {
    countup(){
      this.count++
    }
  }
}

const app = new Vue({
  el: '#app',
  components: {
    'count-component' : countComponent
  }
})